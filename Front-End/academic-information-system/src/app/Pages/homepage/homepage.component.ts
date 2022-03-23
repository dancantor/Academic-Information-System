import { Component, OnInit } from '@angular/core';
import { UserLoginDto } from '../../Models/user-dto';
import {LoginService } from '../../Services/requests/login-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
    this.loginService.login(user).subscribe(status => {
      this.userStatus = status.toString();
      this.router.navigate(['/' + this.userStatus]);
      localStorage.setItem('role', this.userStatus);
    }, error => console.error(error));
  }

  isHome(): boolean {
    console.log(this.router.url);
    return this.router.url ==='/';
  }

}
