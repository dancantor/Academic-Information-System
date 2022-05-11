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

export class NavbarComponent implements OnInit {

  user!: ProfileInformation;

  constructor(private router: Router, private storageService: StorageService, private http: HttpRequestsService){  }
  ngOnInit(): void {
    this.http.getProfileInfoById(this.storageService.getUserId() || '', this.storageService.getUserType())
      .subscribe(result => {this.user = result; console.log(this.user.last_name)});
  }

  logout(): void{
    this.storageService.deleteUserData();
    this.router.navigate(['/login']);
  }

  goToProfile(): void{
    console.log('go to profile called' + this.storageService.getUserType());
    this.router.navigate([`profile`])
  }

  navigateToMenu(): void{
    this.router.navigate([this.storageService.getUserType()]);
  }

}
