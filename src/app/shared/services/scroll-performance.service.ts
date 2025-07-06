import { Injectable, OnDestroy, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ScrollService } from './scroll.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollPerformanceService implements OnDestroy {
  private destroy$ = new Subject<void>();
  private isScrolling = false;
  private scrollTimeout: any;
  private readonly scrollService = inject(ScrollService);

  constructor() {
    this.initScrollOptimization();
  }

  private initScrollOptimization() {
    if (typeof window === 'undefined') return;

    // Usar el scrollY$ optimizado del ScrollService
    this.scrollService.scrollY$
      .pipe(
        debounceTime(16), // ~60fps
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.handleScrolling();
      });
  }

  private handleScrolling() {
    if (!this.isScrolling) {
      this.isScrolling = true;
      this.pauseAnimations();
    }

    // Clear existing timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Set timeout to detect scroll end
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
      this.resumeAnimations();
    }, 150); // Resume animations 150ms after scroll stops
  }

  private pauseAnimations() {
    const animatedElements = document.querySelectorAll(`
      .floating-element,
      .banner-overlay,
      .about-overlay,
      .services-overlay,
      .floating-shape
    `);

    animatedElements.forEach((element: Element) => {
      if (element instanceof HTMLElement) {
        element.style.animationPlayState = 'paused';
      }
    });

    // Add scrolling class to main sections
    const sections = document.querySelectorAll(`
      .banner-section,
      .personal-section,
      .services-section,
      .about-section
    `);

    sections.forEach((section: Element) => {
      section.classList.add('scrolling');
    });
  }

  private resumeAnimations() {
    const animatedElements = document.querySelectorAll(`
      .floating-element,
      .banner-overlay,
      .about-overlay,
      .services-overlay,
      .floating-shape
    `);

    animatedElements.forEach((element: Element) => {
      if (element instanceof HTMLElement) {
        element.style.animationPlayState = 'running';
      }
    });

    // Remove scrolling class from main sections
    const sections = document.querySelectorAll(`
      .banner-section,
      .personal-section,
      .services-section,
      .about-section
    `);

    sections.forEach((section: Element) => {
      section.classList.remove('scrolling');
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
}
