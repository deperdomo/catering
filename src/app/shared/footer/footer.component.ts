import { Component } from '@angular/core';
import { QUOTE_EMAIL } from '../quote-draft';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly email = QUOTE_EMAIL;
  readonly year = new Date().getFullYear();
}
