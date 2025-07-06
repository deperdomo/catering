import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Observable, Subject, debounceTime, map, distinctUntilChanged, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private readonly document = inject(DOCUMENT);
  private readonly destroy$ = new Subject<void>();

  // Observable optimizado para el estado de scroll
  public readonly scrollY$: Observable<number> = fromEvent(this.document.defaultView!, 'scroll')
    .pipe(
      debounceTime(10),
      map(() => this.document.defaultView!.scrollY),
      distinctUntilChanged(),
      shareReplay(1)
    );

  // Observable para detectar si el usuario ha hecho scroll
  public readonly isScrolled$: Observable<boolean> = this.scrollY$
    .pipe(
      map(scrollY => scrollY > 50),
      distinctUntilChanged(),
      shareReplay(1)
    );

  /**
   * Scroll suave a una posición específica
   */
  scrollToPosition(top: number, behavior: ScrollBehavior = 'smooth'): void {
    this.document.defaultView?.scrollTo({
      top,
      behavior
    });
  }

  /**
   * Scroll suave a un elemento específico con offset
   */
  scrollToElement(elementId: string, offset: number = 0): boolean {
    const element = this.document.getElementById(elementId);
    if (!element) return false;

    const elementPosition = element.getBoundingClientRect().top + this.document.defaultView!.scrollY;
    const scrollToPosition = elementPosition - offset;

    this.scrollToPosition(scrollToPosition);
    return true;
  }

  /**
   * Obtener la posición actual de scroll
   */
  getCurrentScrollY(): number {
    return this.document.defaultView?.scrollY || 0;
  }

  /**
   * Verificar si un elemento está visible en el viewport
   */
  isElementInView(elementId: string, threshold: number = 0): boolean {
    const element = this.document.getElementById(elementId);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const viewHeight = this.document.defaultView!.innerHeight;
    
    return (
      rect.top <= viewHeight - threshold &&
      rect.bottom >= threshold
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
