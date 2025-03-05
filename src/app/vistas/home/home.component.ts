import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { BanerComponent } from "./baner/baner.component";
import { AboutComponent } from "./about/about.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { PersonalComponent } from './personal/personal.component';
import { FormContactoComponent } from "./form-contacto/form-contacto.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BanerComponent, AboutComponent, ServiciosComponent, PersonalComponent, FormContactoComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
