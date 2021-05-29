import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginNewService } from '../login-new.service';
import { User } from '../User';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent implements OnInit {
id;
user:User;
  userList:User[] =[];
    //constructor injection of a service 
  constructor(private ar:ActivatedRoute,
    private r:Router,private loginNewService:LoginNewService)  {      }
  
  ngOnInit() { 
    this.loginNewService.getUsers();
    this.loginNewService.getUsers().subscribe(data => { 
      console.log("service data " +data);
   this.userList = data,
    console.log("service userList" +this.userList);
  }         
);
}

// getUserById(id:number)
// {
// this.id=this.ar.snapshot.params['id'];
// console.log("id" +this.id);     
// this.loginNewService.getUserById(this.id).subscribe(data=>{this.user=data}); 
// }

}