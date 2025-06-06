import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMobileMenu = false;
  isScrolled = false;
  private allowAutoScroll = false; // Control para scroll automático

  menuItems = [
    { fragment: 'home', label: 'Home' },
    { fragment: 'acerca-de', label: 'Acerca de' },
    { fragment: 'servicios', label: 'Servicios' },
    { fragment: 'galeria', label: 'Galería' },
    { fragment: 'testimonios', label: 'Testimonios' },
    { fragment: 'contacto', label: 'Contacto' }
  ];

  constructor(private router: Router) {
    // Removido el scroll automático en NavigationEnd
    // El scroll solo ocurrirá cuando se haga clic explícitamente en un enlace del menú
  }
  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth >= 1024) {
      this.showMobileMenu = false;
    }
  }
  scrollToSection(id: string) {
    // Solo hacer scroll cuando se llama explícitamente desde un clic
    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

      gsap.to(window, {
        scrollTo: sectionPosition,
        duration: 1.2,
        ease: 'power2.out',
        onComplete: () => {
          this.showMobileMenu = false;
        }
      });
    }
  }
}