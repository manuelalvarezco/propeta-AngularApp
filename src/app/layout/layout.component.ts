import { Component, OnInit } from '@angular/core';
import { StoreService } from '../property/services/store.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  constructor(private storeService: StoreService){}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(
      products => {
        this.showSnackbar();
      }
    )
  }
  isAdded = false;

  quitSnackbar(){
    this.isAdded = false;
  }

  showSnackbar(){
    this.isAdded = this.storeService.showSnack();
  }

}
