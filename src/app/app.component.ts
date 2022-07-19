import { Component } from '@angular/core';
import { Product } from './shared/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'propeta';
  disabled = false;
}
