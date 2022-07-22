import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PropertyComponent } from './components/property/property.component';
import { PropertiesListComponent } from './components/properties-list/properties-list.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { ProductService } from './services/product.service';
import { SlugPipe } from './pipes/slug.pipe';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  providers:[ProductService],
  declarations: [
    PropertiesListComponent,
    PropertyComponent,
    PropertyDetailComponent,
    SlugPipe,
    CartComponent,
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PropertyModule { }
