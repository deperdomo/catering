import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { PersonaComponent } from "../personal/persona/persona.component";

@Component({
  selector: 'app-testimonios',
  imports: [SectionTitleComponent, PersonaComponent],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent {

}
