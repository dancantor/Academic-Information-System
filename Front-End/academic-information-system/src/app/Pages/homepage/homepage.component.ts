import { Component, OnInit } from '@angular/core';
import { UserLoginDto } from 'src/app/Models/user-dto'; 
import { LoginService } from 'src/app/shared/services/login-service.service';
import {Router} from '@angular/router'
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private storage: StorageService) {}
  ngOnInit(): void {
  }

  student = {
    username: "cantor.dan",
    password: "caca"
  }

  teacher = {
    username: "pop.ion",
    password: "admin"
  }
  staff = {
    username: "elvira.bal",
    password: "secretara"
  }

  userStatus: string;

  testLogin(user: any): void {
    this.loginService.login(user).subscribe(response => {
      this.userStatus = response.toString();
      this.router.navigate(['/' + this.userStatus]);
      
    }, error => console.error(error));
  }

  isHome(): boolean {
    console.log(this.router.url);
    return this.router.url ==='/';
  }

}
