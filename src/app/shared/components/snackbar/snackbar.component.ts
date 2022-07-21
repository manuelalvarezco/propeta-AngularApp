import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  @Input() textLabel: string = '';
  @Input() textButton: string = '';
  @Output() aceptSnackbar = new EventEmitter();
  constructor() { }

  quitSnackbar(){
    console.log('log hijo');
    this.aceptSnackbar.emit();
  }

}
