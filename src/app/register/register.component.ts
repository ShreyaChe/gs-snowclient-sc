import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators}  from '@angular/forms';
import { NodejService } from '../nodej.service' ;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm:FormGroup;
  msgs ='' ;
  guid;
  constructor(private router:Router,private fb:FormBuilder,private nodejService:NodejService) { }

  ngOnInit() {
    this.signupForm  = this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password:['', [Validators.required,
        Validators.minLength(8)]],
    })

    this.nodejService.getUid().subscribe((res:any)=>{
  
      this.guid = res.guid;

       
    },(error)=>{
      this.msgs = error['message']
    });
  }
    registerNewUser(){

      this.nodejService.newUser(this.guid,this.signupForm.value).subscribe((res:any)=>{
        this.msgs = 'User Created'
        if (res.error)  
        this.msgs = res.error ;
  
         
      },(error)=>{
        this.msgs = error['message']
      });
  

      
  
    }
  

}
