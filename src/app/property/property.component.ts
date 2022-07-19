import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @Input() property: Product = {
    title: '',
    image: '',
    description: '',
  }

  constructor() { }

  ngOnInit(): void {
  }



}
