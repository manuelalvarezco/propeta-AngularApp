import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesListComponent } from './components/properties-list/properties-list.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: PropertiesListComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: PropertyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
