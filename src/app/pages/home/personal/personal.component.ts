import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {
  readonly people = [
    { name: 'Daniela', role: 'Cocina de tradición', img: 'daniela', text: 'Prepara platos de sabores auténticos, con recetas de siempre.' },
    { name: 'Henry', role: 'Chef ejecutivo', img: 'henry', text: 'Dirige la cocina y adapta cada menú al evento y a sus invitados.' },
    { name: 'Pablo', role: 'Coctelero', img: 'pablo', text: 'Especialista en mixología: prepara los cócteles de su celebración.' },
  ];
}
