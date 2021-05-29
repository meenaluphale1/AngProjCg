import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;

  users:User[]=[];

  constructor(private formBuilder: FormBuilder, private router: Router, ) { }

  onSubmit(){
    this.submitted = true;
    console.log("form is invalid" +this.loginForm.invalid)
    if(this.loginForm.invalid){
      return;
    }
    if(this.loginForm.controls.uname.value =="jay" &&
        this.loginForm.controls.pwd.value=="jay123" && this.loginForm.controls.role.value=="Admin"){
          localStorage.setItem("username",this.loginForm.controls.uname.value);
          this.router.navigate(['Admin']);
    }   
    if(this.loginForm.controls.uname.value =="vijay" &&
        this.loginForm.controls.pwd.value=="vijay123" && this.loginForm.controls.role.value=="Agent"){
          localStorage.setItem("username",this.loginForm.controls.uname.value);
          this.router.navigate(['Agent']);
    } 
    else{
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      uname: ['', Validators.required],
      pwd: ['', Validators.required],
      role: ['', Validators.required],
    });

  }


}
