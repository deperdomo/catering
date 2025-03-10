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
  menuItems = [
    { fragment: 'home', label: 'Home' },
    { fragment: 'acerca-de', label: 'Acerca de' },
    { fragment: 'servicios', label: 'Servicios' },
    { fragment: 'galeria', label: 'Galería' },
    { fragment: 'testimonios', label: 'Testimonios' },
    { fragment: 'contacto', label: 'Contacto' }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          this.scrollToSection(fragment);
          this.showMobileMenu = false; // Cierra el menú móvil al navegar
        }
      }
    });
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth >= 768) { // 768px = breakpoint md de Tailwind
      this.showMobileMenu = false;
    }
  }

  scrollToSection(id: string) {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const offset = 150;
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
        
        gsap.to(window, {
          scrollTo: sectionPosition,
          duration: 1.5,
          ease: 'power2.out',
          onComplete: () => {
            this.showMobileMenu = false; // Cierra el menú después del scroll
          }
        });
      }
    }, 100);
  }

  isMenuOpen: boolean = false;

}