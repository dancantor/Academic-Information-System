import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  saveStudentData(): void {
    
  }
  saveAdminData(): void {
    //this.saveUserData();
    //localStorage.setItem('isAdmin', JSON.stringify(true));
  }
  getUser(){
  }

  getUserToken() {
    
  }

  deleteUserData(): void {
    // TODO change this accordingly
    localStorage.removeItem('');
    localStorage.removeItem('');
    localStorage.removeItem('');
  }

  

  isUserAdmin(): boolean | false {
    const isAdmin = localStorage.getItem('isAdmin');
    return isAdmin === null ? false : JSON.parse(isAdmin);
  }
}
