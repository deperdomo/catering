import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          this.scrollToSection(fragment);
        }
      }
    });
  }

  scrollToSection(id: string) {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const offset = 150; // Altura deseada para el espacio superior
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
        
        // Uso de GSAP para un scroll más bonito
        gsap.to(window, {
          scrollTo: sectionPosition,
          duration: 1.5, // Duración del desplazamiento en segundos
          ease: 'power2.out' // Efecto de suavizado
        });
      }
    }, 100);
  }
  


}
