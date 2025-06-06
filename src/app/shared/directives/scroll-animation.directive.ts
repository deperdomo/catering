import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IntersectionObserverService } from '../services/intersection-observer.service';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input('appScrollAnimation') animationType: string = 'fadeInUp';
  @Input() delay: number = 0;
  @Input() duration: number = 800;
  @Input() once: boolean = true; // Only animate once by default
  @Input() disabled: boolean = false; // Allow disabling animations

  private subscription?: Subscription;
  private hasAnimated = false;
  private isBrowser = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private intersectionService: IntersectionObserverService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser || this.disabled) {
      return;
    }

    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.showElement();
      return;
    }

    this.setInitialState();
  }

  ngAfterViewInit() {
    if (!this.isBrowser || this.disabled) {
      return;
    }

    // Start observing after view is initialized
    this.startObserving();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.isBrowser) {
      this.intersectionService.unobserve(this.el);
    }
  }

  private setInitialState() {
    this.renderer.addClass(this.el.nativeElement, 'scroll-animation-hidden');
    this.renderer.addClass(this.el.nativeElement, `animation-${this.animationType}`);
    
    // Set custom duration if provided
    if (this.duration !== 800) {
      this.renderer.setStyle(this.el.nativeElement, 'animation-duration', `${this.duration}ms`);
    }

    // Add will-change for better performance
    this.renderer.setStyle(this.el.nativeElement, 'will-change', 'transform, opacity');
  }

  private startObserving() {
    const stream = this.intersectionService.observe(this.el);
    
    this.subscription = (this.once ? stream.pipe(filter(Boolean), take(1)) : stream)
      .subscribe(isVisible => {
        if (isVisible && (!this.once || !this.hasAnimated)) {
          this.animateIn();
          this.hasAnimated = true;
        } else if (!isVisible && !this.once && this.hasAnimated) {
          this.animateOut();
        }
      });
  }

  private animateIn() {
    if (this.delay > 0) {
      setTimeout(() => this.showElement(), this.delay);
    } else {
      this.showElement();
    }
  }

  private animateOut() {
    if (!this.once) {
      this.renderer.removeClass(this.el.nativeElement, 'scroll-animation-visible');
      this.renderer.addClass(this.el.nativeElement, 'scroll-animation-hidden');
      this.hasAnimated = false;
    }
  }
  private showElement() {
    this.renderer.removeClass(this.el.nativeElement, 'scroll-animation-hidden');
    this.renderer.addClass(this.el.nativeElement, 'scroll-animation-visible');
    
    // Remove will-change after animation completes for better performance
    setTimeout(() => {
      this.renderer.removeStyle(this.el.nativeElement, 'will-change');
    }, this.duration + 100);
  }
}
