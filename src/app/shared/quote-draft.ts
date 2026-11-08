import { Injectable, signal } from '@angular/core';

export const EVENT_TYPES = ['Boda', 'Cumpleaños', 'Empresa', 'Evento exclusivo'] as const;
export const QUOTE_EMAIL = 'danielacateringyeventos@gmail.com';
/** Local date as YYYY-MM-DD, the format date inputs use. */
export const todayISO = () => new Date().toLocaleDateString('sv-SE');

export interface Quote {
  tipo: string;
  fecha: string;
  invitados: number | null;
  zona: string;
  nombre: string;
  mensaje: string;
}

/** Field id → message for every required field that is missing or wrong. */
export function quoteErrors(q: Quote, today: string): Record<string, string> {
  const e: Record<string, string> = {};
  if (!q.tipo) e['tipo'] = 'Elija el tipo de evento.';
  if (!q.fecha) e['fecha'] = 'Indique la fecha del evento.';
  else if (q.fecha < today) e['fecha'] = 'Esa fecha ya ha pasado. Elija una fecha futura.';
  if (!Number.isInteger(q.invitados) || (q.invitados ?? 0) < 1) e['invitados'] = 'Indique cuántos invitados espera, aunque sea aproximado.';
  if (!q.nombre.trim()) e['nombre'] = 'Escriba su nombre para saber a quién responder.';
  return e;
}

export function quoteEmail(q: Quote): { subject: string; body: string } {
  const fecha = new Date(q.fecha + 'T12:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  const body = [
    'Hola, Daniela Catering:',
    '',
    'Quiero pedir presupuesto para este evento:',
    `- Tipo de evento: ${q.tipo}`,
    `- Fecha: ${fecha}`,
    `- Invitados: ${q.invitados}`,
    `- Zona o lugar: ${q.zona.trim() || 'por concretar'}`,
    ...(q.mensaje.trim() ? ['', q.mensaje.trim()] : []),
    '',
    q.nombre.trim(),
  ].join('\n');
  return { subject: `Presupuesto: ${q.tipo}, ${fecha}, ${q.invitados} invitados`, body };
}

export function mailtoUrl(q: Quote): string {
  const { subject, body } = quoteEmail(q);
  return `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.replace(/\n/g, '\r\n'))}`;
}

/** One quote draft shared by the hero bar, the service tabs and the quote form. */
// ponytail: in-memory only; persist to sessionStorage if visitors lose drafts on reload
@Injectable({ providedIn: 'root' })
export class QuoteDraft {
  readonly tipo = signal('');
  readonly fecha = signal('');
  readonly invitados = signal<number | null>(null);
  readonly zona = signal('');

  /** Moves the visitor to the quote form and focuses the first field still empty. */
  start(tipo?: string): void {
    if (tipo) this.tipo.set(tipo);
    const next = !this.tipo() ? 'tipo' : !this.fecha() ? 'fecha' : !this.invitados() ? 'invitados' : 'nombre';
    document.getElementById('presupuesto')?.scrollIntoView();
    document.getElementById('q-' + next)?.focus({ preventScroll: true });
  }
}
