import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CreateUserDTO, User } from 'src/app/shared/models/User';
import Swal from 'sweetalert2'
import { catchError, tap, throwError } from 'rxjs';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api';
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(data: User){
    return this.http.post(`${this.apiUrl}/auth/login`,{email: data.email, password: data.password} )
      .pipe(
        tap((response: any) => this.tokenService.saveToken(response.access_token)),
        catchError((error: any) => {
          throw new Error(error)
        })
      )
  }


  register(user: CreateUserDTO){
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  grantedAccess(){
    Swal.fire({
      title: 'Congrats!',
      text: 'Your Access is Granted',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  accessDenied(module: string){
    Swal.fire({
      title: 'Error!',
      text: `Error in ${module}`,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }
}
