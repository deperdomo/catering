import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-persona',
  imports: [CommonModule],
  templateUrl: './persona.component.html',
})
export class PersonaComponent {
  @Input() fotoUrl!: string;
  @Input() nombre!: string;
  @Input() cargo!: string;
  @Input() descripcion!: string;
  
  @ViewChild('descripcionElement') descripcionElement!: ElementRef<HTMLElement>;

  mostrarTextoCompleto = false;
  pointer = false;

  toggleTexto() {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
  }
}