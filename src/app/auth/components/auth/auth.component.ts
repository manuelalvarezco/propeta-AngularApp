import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  form: FormGroup = new FormGroup('');

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    this.buildForm();
  }

  login(event: Event){
    event.preventDefault();
    this.authService.login(this.form.value).subscribe(
      (resp: any) => {
        this.authService.grantedAccess();
      },(error: any) => {
        this.authService.accessDenied('Login');
      }
    )
  }

  private buildForm(){
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  }

}
