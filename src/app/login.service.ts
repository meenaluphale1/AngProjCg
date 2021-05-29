import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }
  baseUrl:string = 'http://localhost:3000/users';

  // Get All Users
  getUsers(){
    console.log(this.http.get<User[]>(this.baseUrl));
    return this.http.get<User[]>(this.baseUrl);
  }

  // Get User By Id
  getUserById(uname: string){
    return this.http.get<User>(this.baseUrl+'/'+uname);
  }


}
