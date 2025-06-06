import { Injectable, ElementRef, OnDestroy } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService implements OnDestroy {
  private observer!: IntersectionObserver;
  private observedElements = new Map<Element, BehaviorSubject<boolean>>();
  private isSupported = typeof IntersectionObserver !== 'undefined';

  constructor() {
    if (this.isSupported) {
      this.createObserver();
    }
  }

  private createObserver() {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -5% 0px', // Optimized trigger point
      threshold: [0, 0.1, 0.25] // Multiple thresholds for better performance
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const subject = this.observedElements.get(entry.target);
        if (subject) {
          subject.next(entry.isIntersecting);
        }
      });
    }, options);
  }

  observe(element: ElementRef | Element): Observable<boolean> {
    if (!this.isSupported) {
      // Fallback for browsers without IntersectionObserver support
      return new BehaviorSubject(true).asObservable();
    }

    const targetElement = element instanceof ElementRef ? element.nativeElement : element;
    
    if (!this.observedElements.has(targetElement)) {
      const subject = new BehaviorSubject<boolean>(false);
      this.observedElements.set(targetElement, subject);
      this.observer.observe(targetElement);
    }

    return this.observedElements.get(targetElement)!.asObservable().pipe(
      distinctUntilChanged(),
      shareReplay(1)
    );
  }

  unobserve(element: ElementRef | Element) {
    if (!this.isSupported) return;
    
    const targetElement = element instanceof ElementRef ? element.nativeElement : element;
    
    if (this.observedElements.has(targetElement)) {
      this.observer.unobserve(targetElement);
      this.observedElements.get(targetElement)!.complete();
      this.observedElements.delete(targetElement);
    }
  }

  disconnect() {
    if (!this.isSupported) return;
    
    this.observer.disconnect();
    this.observedElements.forEach(subject => subject.complete());
    this.observedElements.clear();
  }

  ngOnDestroy() {
    this.disconnect();
  }
}
