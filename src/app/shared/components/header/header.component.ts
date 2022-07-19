import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isOpen = !this.isOpen;
  }

}
