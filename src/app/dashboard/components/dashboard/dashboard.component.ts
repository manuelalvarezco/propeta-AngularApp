import { Component } from '@angular/core';
import { FilesService } from '../../../services/files.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  imgRta = '';

  constructor(private filesService: FilesService) { }

  downloadPdf(){
    this.filesService.getFile('my.pdf', 'url', 'application/pdf')
      .subscribe()
  }

  uploadFile(event: Event){
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if(file){
      this.filesService.uploadFile(file)
        .subscribe( rta => {
          this.imgRta = rta.location
        })
    }
  }

}
