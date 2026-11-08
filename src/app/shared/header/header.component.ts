import { AfterViewInit, Component, DestroyRef, HostListener, inject, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  readonly links = [
    { href: '#equipo', label: 'Equipo' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#galeria', label: 'Galería' },
  ];
  readonly menuOpen = signal(false);
  /** Phone-only shortcut to the quote, hidden wherever the page already shows a quote action or the footer. */
  readonly showBottomBar = signal(false);
  private readonly destroyRef = inject(DestroyRef);

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.menuOpen.set(false);
  }

  ngAfterViewInit(): void {
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) e.isIntersecting ? visible.add(e.target) : visible.delete(e.target);
      this.showBottomBar.set(visible.size === 0);
    }, { rootMargin: '-80px 0px 0px 0px' }); // a section hidden under the sticky header does not count
    for (const id of ['inicio', 'servicios', 'presupuesto', 'pie']) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
