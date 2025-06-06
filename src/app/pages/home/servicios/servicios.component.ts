import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../shared/section-title/section-title.component";
import { ServicioComponent } from "./servicio/servicio.component";
import { ScrollAnimationDirective } from '../../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-servicios',
  imports: [SectionTitleComponent, ServicioComponent, ScrollAnimationDirective],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
