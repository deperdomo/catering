import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../../shared/section-title/section-title.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [SectionTitleComponent, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
