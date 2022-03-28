import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/genericUser';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user!: User;
  constructor(private router: Router, private storageService: StorageService){
    this.setUser();
  }

  setUser(): void{
    this.user = new User()
    this.user.name = "Pop Ioan";
  }

  logout(): void{
    this.storageService.deleteUserData();
    this.router.navigate(['/login']);
  }

}
