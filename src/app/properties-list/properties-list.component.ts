import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {

  properties: Product[] = [
    {
      title: 'Cadbury Junction',
      image: 'https://www.propertyok.com/_next/image?url=https%3A%2F%2Fpropok-prod-images.s3.ap-south-1.amazonaws.com%2FresizeImages%2FpropertyImages%2Fproperty-image-500x500%2F15300605233169image&w=1920&q=75',
      description: 'By Kapleshwara Builders And Developers',
    },
    {
      title: 'Cadbury Junction',
      image: 'https://www.propertyok.com/_next/image?url=https%3A%2F%2Fpropok-prod-images.s3.ap-south-1.amazonaws.com%2FresizeImages%2FpropertyImages%2Fproperty-image-500x500%2F414296548543071image&w=1920&q=75',
      description: 'By Kapleshwara Builders And Developers',
    },
    {
      title: 'Cadbury Junction',
      image: 'https://www.propertyok.com/_next/image?url=https%3A%2F%2Fpropok-prod-images.s3.ap-south-1.amazonaws.com%2FresizeImages%2FpropertyImages%2Fproperty-image-500x500%2F274403983130051image&w=1920&q=75',
      description: 'By Kapleshwara Builders And Developers',
    },
    {
      title: 'Cadbury Junction',
      image: 'https://www.propertyok.com/_next/image?url=https%3A%2F%2Fpropok-prod-images.s3.ap-south-1.amazonaws.com%2FresizeImages%2FpropertyImages%2Fproperty-image-500x500%2F576233140375943image&w=1920&q=75',
      description: 'By Kapleshwara Builders And Developers',
    },
    {
      title: 'Cadbury Junction',
      image: 'https://www.propertyok.com/_next/image?url=https%3A%2F%2Fpropok-prod-images.s3.ap-south-1.amazonaws.com%2FresizeImages%2FpropertyImages%2Fproperty-image-500x500%2F827422050236704image&w=1920&q=75',
      description: 'By Kapleshwara Builders And Developers',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
