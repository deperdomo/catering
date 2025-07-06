import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  imports: [SectionTitleComponent, CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  touchStartX = 0;
  touchEndX = 0;
  slideWidthPercent = 100;
  
  // Autoplay properties
  isAutoPlaying = true;
  autoPlayInterval: any;
  autoPlayDuration = 4000; // 4 segundos

  slides = [
    { image: 'img/home/carrusel/carrusel-01.jpg', title: 'Parrilladas Gourmet' },
    { image: 'img/home/carrusel/carrusel-02.jpg', title: 'Postres Artesanales' },
    { image: 'img/home/carrusel/carrusel-03.jpg', title: 'Tapas Selectas' },
    { image: 'img/home/carrusel/carrusel-04.jpg', title: 'Cócteles Signature' },
    { image: 'img/home/carrusel/carrusel-05.jpg', title: 'Bebidas Premium' },
    { image: 'img/home/carrusel/carrusel-06.jpg', title: 'Productos Frescos' },
    { image: 'img/home/carrusel/carrusel-07.jpg', title: 'Platos Tradicionales' },
    { image: 'img/home/carrusel/carrusel-08.jpg', title: 'Recetas Caseras' },
    { image: 'img/home/carrusel/carrusel-09.jpg', title: 'Vinos Selectos' },
    { image: 'img/home/carrusel/carrusel-10.jpg', title: 'Cocina Vanguardia' }
  ];

  ngOnInit() {
    this.calculateSlideWidth();
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateSlideWidth();
  }

  calculateSlideWidth() {
    // En el nuevo diseño siempre mostramos una imagen a la vez
    this.slideWidthPercent = 100;
  }

  // Métodos de navegación
  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.resetAutoPlay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetAutoPlay();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoPlay();
  }

  // Métodos de autoplay
  startAutoPlay() {
    if (this.isAutoPlaying) {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayDuration);
    }
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  pauseAutoPlay() {
    this.stopAutoPlay();
  }

  resumeAutoPlay() {
    if (this.isAutoPlaying) {
      this.startAutoPlay();
    }
  }

  toggleAutoPlay() {
    this.isAutoPlaying = !this.isAutoPlaying;
    if (this.isAutoPlaying) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }

  resetAutoPlay() {
    if (this.isAutoPlaying) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  // Métodos táctiles
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.pauseAutoPlay();
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {
    const swipeThreshold = 50;
    if (this.touchStartX - this.touchEndX > swipeThreshold) {
      this.nextSlide();
    } else if (this.touchEndX - this.touchStartX > swipeThreshold) {
      this.previousSlide();
    }
    this.resumeAutoPlay();
  }

  // Métodos legacy para compatibilidad
  onPrevClick() {
    this.previousSlide();
  }

  onNextClick() {
    this.nextSlide();
  }
}
