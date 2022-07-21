import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { HeroComponent } from './components/hero/hero.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SnackbarComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SnackbarComponent,
    HeroComponent
  ]
})
export class SharedModule { }
