import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persona',
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {

  @Input() foto!: string;
  @Input() nombre!: string;
  @Input() cargo!: string;
  @Input() descripcion!: string;


}
