import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EVENT_TYPES, QUOTE_EMAIL, Quote, QuoteDraft, mailtoUrl, quoteEmail, quoteErrors, todayISO } from '../../../shared/quote-draft';

@Component({
  selector: 'app-form-contacto',
  imports: [FormsModule],
  templateUrl: './form-contacto.component.html',
  styleUrl: './form-contacto.component.css'
})
export class FormContactoComponent {
  readonly draft = inject(QuoteDraft);
  readonly eventTypes = EVENT_TYPES;
  readonly email = QUOTE_EMAIL;
  readonly today = todayISO();
  readonly nombre = signal('');
  readonly mensaje = signal('');
  readonly errors = signal<Record<string, string>>({});
  readonly sent = signal(false);
  readonly copied = signal(false);
  readonly copyFailed = signal(false);

  private quote(): Quote {
    const d = this.draft;
    return { tipo: d.tipo(), fecha: d.fecha(), invitados: d.invitados(), zona: d.zona(), nombre: this.nombre(), mensaje: this.mensaje() };
  }

  requestText(): string {
    const { subject, body } = quoteEmail(this.quote());
    return `Para: ${this.email}\nAsunto: ${subject}\n\n${body}`;
  }

  submit(): void {
    const errors = quoteErrors(this.quote(), this.today);
    this.errors.set(errors);
    const first = Object.keys(errors)[0];
    if (first) {
      document.getElementById('q-' + first)?.focus();
      return;
    }
    window.location.href = mailtoUrl(this.quote());
    this.sent.set(true);
    setTimeout(() => document.getElementById('q-status')?.focus());
  }

  copy(): void {
    navigator.clipboard.writeText(this.requestText()).then(
      () => this.copied.set(true),
      () => this.copyFailed.set(true),
    );
  }

  edit(): void {
    this.sent.set(false);
    this.copied.set(false);
    this.copyFailed.set(false);
    setTimeout(() => document.getElementById('q-tipo')?.focus());
  }
}
