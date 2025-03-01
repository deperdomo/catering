import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { BanerComponent } from "./baner/baner.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BanerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
