import { Component, inject } from '@angular/core';
import { SectionTitleComponent } from "../../../shared/section-title/section-title.component";
import { ScrollAnimationDirective } from '../../../shared/directives/scroll-animation.directive';
import { ScrollService } from '../../../shared/services/scroll.service';

@Component({
  selector: 'app-about',
  imports: [SectionTitleComponent, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  private readonly scrollService = inject(ScrollService);

  scrollToSection(id: string): void {
    const headerOffset = 100;
    this.scrollService.scrollToElement(id, headerOffset);
  }
}
