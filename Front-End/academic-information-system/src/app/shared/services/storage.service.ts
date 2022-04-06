import { Injectable } from '@angular/core';
import { LoginResponseUser } from 'src/app/Models/login-response-dto';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  saveUserData(user: LoginResponseUser): void {
    localStorage.setItem("Type", JSON.stringify(user.type));
    localStorage.setItem("Id", user.id.toString());
  }

  getUserId(){
    return localStorage.getItem("Id");
  }

  getUserType() {
    let type = localStorage.getItem("Type");
    return type !== null ? JSON.parse(type) : "";
  }

  deleteUserData(): void {
    // TODO change this accordingly
    localStorage.removeItem('Id');
    localStorage.removeItem('Type');
  }

  

  isUserStudent(): boolean | false {
    const type = localStorage.getItem('type');
    return type === null || JSON.parse(type) !== "student" ? false : true;
  }

  isUserTeacher(): boolean | false {
    const type = localStorage.getItem('type');
    return type === null || JSON.parse(type) !== "teacher" ? false : true;
  }

  isUserStaff(): boolean | false {
    const type = localStorage.getItem('type');
    return type === null || JSON.parse(type) !== "staff" ? false : true;
  }
}
