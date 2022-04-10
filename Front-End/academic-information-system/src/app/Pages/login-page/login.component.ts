import { StorageService } from './../../shared/services/storage.service';
import { UserLoginDto } from 'src/app/Models/user-dto';
import { LoginService } from 'src/app/shared/services/login-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { parseWebAPIErrors } from 'src/app/shared/utilities/utils';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  hide: boolean = true;
  errors: string[] = [];
  
  constructor(private fb: FormBuilder, private loginService: LoginService, 
              private localStorageService: StorageService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.nullValidator]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  onLogin(): void{ 
    if (!this.loginForm.valid){
      return;
    }
    this.loginService.login(this.loginForm.value).subscribe(response =>{
      this.localStorageService.saveUserData(response);
      this.router.navigate(['/' + 'profile']);
    }, error => {
      if (error.error === "User not found in the database") {
        this.errors = parseWebAPIErrors({error: "Invalid account"});
      }
      else {
        this.errors = parseWebAPIErrors(error);
      }
  });
  }
}
