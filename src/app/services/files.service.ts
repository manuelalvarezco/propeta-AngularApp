import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { saveAs } from 'file-saver';

interface File {
  originalName: string;
  filename: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private http: HttpClient
  ) { }

  getFile(name: string, url: string, type: string){
    return this.http.get(url, { responseType: 'blob'})
      .pipe(
        tap(content=> {
          const blob = new Blob([content], { type});
          saveAs(blob, name)
         }),
      map(()=> true)
      )
  }

  uploadFile(file: Blob){
    const dto = new FormData();
    dto.append('file', file);
    return this.http.post<File>('url', dto, {
      headers: {
        'Content-type': "multipart/form-data"
      }
    });
  }
}
