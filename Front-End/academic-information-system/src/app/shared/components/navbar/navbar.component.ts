import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { ProfileInformation } from '../../../Models/student.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  @Input()
  user!: ProfileInformation;

  constructor(private router: Router, private storageService: StorageService){  }


  logout(): void{
    this.storageService.deleteUserData();
    this.router.navigate(['/login']);
  }

}
