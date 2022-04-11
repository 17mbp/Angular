import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { WhiteSpaceValidator } from '../shared/validators/whiteSpaceValidator';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginError = '';
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
//  name: string ="Manuel";
  ngOnInit() {
    this.authService.logout();
    this.buildLoginForm();
  }
  buildLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, WhiteSpaceValidator.cannotContainSpace]],
      password: ['', [Validators.required, Validators.minLength(2), WhiteSpaceValidator.cannotContainSpace]]
    });
  }
  login(submittedForm: FormGroup){    
   this.authService.login(submittedForm.value.email, submittedForm.value.password)   
   .subscribe(authResponse => {   
     this.router.navigate(['/home']);
   }, error => this.loginError = error);
  }
}