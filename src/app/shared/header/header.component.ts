import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Subject, fromEvent, debounceTime, takeUntil } from 'rxjs';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  showMobileMenu = false;
  isScrolled = false;
  private destroy$ = new Subject<void>();
  private readonly document = inject(DOCUMENT);
  private readonly scrollService = inject(ScrollService);

  menuItems = [
    { fragment: 'home', label: 'Home' },
    { fragment: 'acerca-de', label: 'Acerca de' },
    { fragment: 'servicios', label: 'Servicios' },
    { fragment: 'galeria', label: 'Galería' },
    { fragment: 'testimonios', label: 'Testimonios' },
    { fragment: 'contacto', label: 'Contacto' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Suscribirse al estado de scroll optimizado
    this.scrollService.isScrolled$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isScrolled => {
        this.isScrolled = isScrolled;
      });

    // Manejar redimensionamiento de ventana
    fromEvent(this.document.defaultView!, 'resize')
      .pipe(
        debounceTime(100),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.handleResize();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private handleResize(): void {
    if (this.document.defaultView!.innerWidth >= 1024) {
      this.showMobileMenu = false;
    }
  }

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  scrollToSection(id: string): void {
    const headerOffset = 100;
    const success = this.scrollService.scrollToElement(id, headerOffset);
    
    if (success) {
      this.showMobileMenu = false;
    }
  }
}