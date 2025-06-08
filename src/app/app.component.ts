import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollPerformanceService } from './shared/services/scroll-performance.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'daniela-catering';

  constructor(private scrollPerformanceService: ScrollPerformanceService) {}

  ngOnInit() {
  }
}
