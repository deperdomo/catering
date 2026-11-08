import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  /** h is the 960px-wide file's height, so the browser reserves the right space. */
  readonly photos = [
    { img: 'tabla', h: 1440, caption: 'Tabla de embutidos, quesos y fruta', alt: 'Tabla con embutidos, quesos, uvas, higos y panes' },
    { img: 'croquetas', h: 1440, caption: 'Croquetas recién hechas', alt: 'Manos partiendo una croqueta recién hecha' },
    { img: 'coctel-naranja', h: 1450, caption: 'Cóctel de naranja', alt: 'Cóctel de naranja con romero en copa de balón' },
    { img: 'salmon', h: 640, caption: 'Salmón con huevo de codorniz', alt: 'Bandeja de salmón con huevos de codorniz y sésamo' },
    { img: 'tartaletas', h: 1440, caption: 'Tartaletas de merengue', alt: 'Tartaletas con merengue tostado' },
    { img: 'raciones', h: 1280, caption: 'Raciones para compartir', alt: 'Platos de alitas y calamares fritos con salsa' },
    { img: 'parrilla', h: 1440, caption: 'Carne a la parrilla', alt: 'Bandeja de carne a la parrilla servida con pinzas' },
    { img: 'coctel-rosa', h: 1440, caption: 'Cóctel de frutos rojos', alt: 'Cóctel rosado con limón y frutos rojos' },
  ];
}
