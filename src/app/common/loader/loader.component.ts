import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  standalone: true,
  imports: [ProgressSpinnerModule],
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
