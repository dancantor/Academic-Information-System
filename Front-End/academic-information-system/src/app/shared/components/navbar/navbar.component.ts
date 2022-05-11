import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { ProfileInformation } from '../../../Models/student.model';
import { HttpRequestsService } from '../../services/http-requests.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  user:  ProfileInformation;
  userId: string;
  role: string;
  ngOnInit(): void {
    this.user = {
      id: '0',
      age: 0,
      cnp: 0,
      first_name: '',
      last_name: ''
    }
    this.getUserInfo();
  }

  getUserInfo(): void{
    this.userId = this.storageService.getUserId() || '';
    this.role = this.storageService.getUserType();
    this.http.getProfileInfoById(this.userId, this.role)
      .subscribe(result => this.user = result);
  }

  constructor(private router: Router, private storageService: StorageService, private http: HttpRequestsService){  }


  logout(): void{
    this.storageService.deleteUserData();
    this.router.navigate(['/login']);
  }

}
