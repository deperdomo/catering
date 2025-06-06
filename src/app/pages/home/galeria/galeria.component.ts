import { Component, HostListener, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  imports: [SectionTitleComponent, CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  currentSlide = 0;
  touchStartX = 0;
  touchEndX = 0;
  // Valor por defecto para móviles: 100%
  slideWidthPercent = 100;

  slides = [
    { image: 'img/home/carrusel/carrusel-01.jpg', title: 'Parrilladas' },
    { image: 'img/home/carrusel/carrusel-02.jpg', title: 'Postres' },
    { image: 'img/home/carrusel/carrusel-03.jpg', title: 'Tapas' },
    { image: 'img/home/carrusel/carrusel-04.jpg', title: 'Cócteles' },
    { image: 'img/home/carrusel/carrusel-05.jpg', title: 'Bebidas' },
    { image: 'img/home/carrusel/carrusel-06.jpg', title: 'Productos fescos' },
    { image: 'img/home/carrusel/carrusel-07.jpg', title: 'Tradicionales' },
    { image: 'img/home/carrusel/carrusel-08.jpg', title: 'Caseras' },
    { image: 'img/home/carrusel/carrusel-09.jpg', title: 'Vinos' },
    { image: 'img/home/carrusel/carrusel-10.jpg', title: 'Banguardia' }
  ];

  ngOnInit() {
    this.calculateSlideWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateSlideWidth();
  }

  calculateSlideWidth() {
    const width = window.innerWidth;
    if (width >= 768) { 
      // md y mayores: se muestran 3 imágenes
      this.slideWidthPercent = 33.333333;
    } else if (width >= 640) { 
      // sm: se muestran 2 imágenes
      this.slideWidthPercent = 50;
    } else {
      // Por defecto en móviles: 1 imagen
      this.slideWidthPercent = 100;
    }
  }

  onPrevClick() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  onNextClick() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {
    const swipeThreshold = 50; // Sensibilidad del swipe
    if (this.touchStartX - this.touchEndX > swipeThreshold) {
      this.onNextClick();
    } else if (this.touchEndX - this.touchStartX > swipeThreshold) {
      this.onPrevClick();
    }
  }
}
