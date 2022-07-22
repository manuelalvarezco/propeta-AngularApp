import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

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
        if(products.length > 0){
          this.isAdded = true;
        }
      }
    )
  }
  isAdded = false;

  quitSnackbar(){
    this.isAdded = false;
  }

}
