import { Component, inject } from '@angular/core';
import { ScrollService } from '../../../shared/services/scroll.service';

@Component({
  selector: 'app-baner',
  imports: [],
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.css'
})
export class BanerComponent {
  private readonly scrollService = inject(ScrollService);

  scrollToSection(id: string): void {
    const headerOffset = 100;
    this.scrollService.scrollToElement(id, headerOffset);
  }
}
