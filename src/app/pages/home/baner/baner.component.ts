import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EVENT_TYPES, QuoteDraft, todayISO } from '../../../shared/quote-draft';

@Component({
  selector: 'app-baner',
  imports: [FormsModule],
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.css'
})
export class BanerComponent {
  readonly draft = inject(QuoteDraft);
  readonly eventTypes = EVENT_TYPES;
  readonly today = todayISO();
}
