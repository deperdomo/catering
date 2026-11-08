import { Component, inject, signal } from '@angular/core';
import { QuoteDraft } from '../../../shared/quote-draft';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  readonly draft = inject(QuoteDraft);
  readonly active = signal(0);
  readonly services = [
    {
      id: 'bodas', tipo: 'Boda', name: 'Bodas',
      alt: 'Mesa de banquete de boda con flores, copas y sillas vestidas de blanco',
      text: 'Un menú personalizado para su boda, con aperitivos de presentación para el cóctel y una barra a cargo de nuestro coctelero.',
      cta: 'Pedir presupuesto para su boda',
    },
    {
      id: 'cumpleanos', tipo: 'Cumpleaños', name: 'Cumpleaños',
      alt: 'Mesa dulce de cumpleaños con tartas, dulces y globos',
      text: 'Un catering variado para su cumpleaños, con el menú pensado para sus invitados.',
      cta: 'Pedir presupuesto para su cumpleaños',
    },
    {
      id: 'empresas', tipo: 'Empresa', name: 'Empresas',
      alt: 'Bufé con brochetas de carne, aperitivos y platos calientes',
      text: 'Catering para reuniones, conferencias y eventos corporativos, ajustado al formato y al número de asistentes.',
      cta: 'Pedir presupuesto para su empresa',
    },
    {
      id: 'exclusivos', tipo: 'Evento exclusivo', name: 'Eventos exclusivos',
      alt: 'Dos copas de vino blanco sobre una mesa',
      text: 'Para cócteles y celebraciones privadas: aperitivos de presentación y los cócteles de Pablo.',
      cta: 'Pedir presupuesto para su evento',
    },
  ];

  /** Arrow keys move between tabs, as the WAI-ARIA tabs pattern expects. */
  onKeydown(e: KeyboardEvent): void {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (this.active() + step + this.services.length) % this.services.length;
    this.active.set(next);
    document.getElementById('tab-' + this.services[next].id)?.focus();
  }
}
