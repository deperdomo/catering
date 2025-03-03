import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { BanerComponent } from "./baner/baner.component";
import { AboutComponent } from "./about/about.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { PersonalComponent } from './personal/personal.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BanerComponent, AboutComponent, ServiciosComponent, PersonalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
