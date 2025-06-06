import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../shared/section-title/section-title.component";
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  imports: [SectionTitleComponent, RouterModule, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
