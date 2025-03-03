import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../shared/section-title/section-title.component";
import { ServicioComponent } from "./servicio/servicio.component";

@Component({
  selector: 'app-servicios',
  imports: [SectionTitleComponent, ServicioComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
