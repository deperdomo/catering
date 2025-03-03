import { Component } from '@angular/core';
import { PersonaComponent } from "./persona/persona.component";
import { SectionTitleComponent } from "../../../shared/section-title/section-title.component";

@Component({
  selector: 'app-personal',
  imports: [PersonalComponent, PersonaComponent, SectionTitleComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

}
