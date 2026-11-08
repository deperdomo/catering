import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { BanerComponent } from './baner/baner.component';
import { PersonalComponent } from './personal/personal.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BanerComponent, PersonalComponent, ServiciosComponent, GaleriaComponent, FormContactoComponent, FooterComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
