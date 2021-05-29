import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginNewService } from '../login-new.service';
import { User } from '../User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user:User;
  userList:User[]=[];
  id;
  username;
  constructor(private ar:ActivatedRoute,
              private r:Router,
              private logSer:LoginNewService){
                
  }
  ngOnInit() {      
       this.id=this.ar.snapshot.params['id'];
      console.log("id" +this.id);     
      this.logSer.getUserById(this.id).subscribe(data=>{this.user=data}); 
    //  console.log(this.product);
    //     this.username=this.ar.snapshot.params['username'];
    //   console.log("username" +this.username);     
    //   this.logSer.getUserByName(this.username).subscribe(data=>{this.user=data});     
    //  console.log(this.user);

  }
    
  onRolePage(): void {
    console.log("selected id" +this.user.id);
    console.log("selected name" +this.user.username);    
    console.log("selected role" +this.user.role);
    if(this.user.role=="Admin")
    {
    this.r.navigate(['Admin']);
    }
    if(this.user.role=="Agent")
    {
    this.r.navigate(['Agent']);
    }
 }
 
}
