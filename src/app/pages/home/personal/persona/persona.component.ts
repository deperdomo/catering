import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-persona',
  imports: [CommonModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements AfterViewInit {
  @Input() fotoUrl!: string;
  @Input() nombre!: string;
  @Input() cargo!: string;
  @Input() descripcion!: string;
  
  @ViewChild('descripcionElement') descripcionElement!: ElementRef<HTMLElement>;

  mostrarTextoCompleto = false;
  pointer = false;
  needsExpansion = false;

  ngAfterViewInit() {
    // Verificar si el texto necesita expansión
    this.checkTextOverflow();
  }

  private checkTextOverflow() {
    if (this.descripcionElement?.nativeElement) {
      const element = this.descripcionElement.nativeElement;
      this.needsExpansion = element.scrollHeight > element.clientHeight;
    }
  }

  toggleTexto() {
    if (this.needsExpansion) {
      this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
    }
  }
}