import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subject, merge } from 'rxjs';
import { throttleTime, takeUntil, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollPerformanceService implements OnDestroy {
  private destroy$ = new Subject<void>();
  private isScrolling = false;
  private scrollTimeout: any;

  constructor() {
    this.initScrollOptimization();
  }

  private initScrollOptimization() {
    if (typeof window === 'undefined') return;

    // Throttle scroll events to reduce performance impact
    const scroll$ = fromEvent(window, 'scroll', { passive: true }).pipe(
      throttleTime(16), // ~60fps
      takeUntil(this.destroy$)
    );

    // Detect scroll start
    scroll$.subscribe(() => {
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
    });

    // Also listen for wheel events (for faster response)
    const wheel$ = fromEvent(window, 'wheel', { passive: true }).pipe(
      throttleTime(16),
      takeUntil(this.destroy$)
    );

    wheel$.subscribe(() => {
      if (!this.isScrolling) {
        this.isScrolling = true;
        this.pauseAnimations();
      }
    });
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
