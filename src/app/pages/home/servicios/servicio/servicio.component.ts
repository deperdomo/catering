import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servicio',
  imports: [],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent {
  @Input() imagen!: string;
  @Input() titulo!: string;
  @Input() descripcion!: string;
  
}
