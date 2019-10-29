import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators}  from '@angular/forms';
import { NodejService} from '../nodej.service' ;
import { SnowserviceService} from '../snowservice.service' ;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private router:Router,private fb:FormBuilder, private nodejservice:NodejService,private snowservice:SnowserviceService) { }
  msgs;
  ngOnInit() {
    this.loginForm  = this.fb.group({

      email: [''],
      password: [''],

  })
  }

  oauth2Login()
  {
     this.nodejservice.loginUser(this.loginForm.value).subscribe(
   // this.snowservice.oauthLogin(this.loginForm.value).subscribe(
    response=>
    {
      if (response.response )
        
      {
          this.router.navigate(['/home']);
          localStorage.setItem('isLoggedIn', 'true');

         // this.getUserInfoUsingOAuth2Token(response['access_token']);
        }
      else
        { this.msgs = 'Invalid Credentials' }
      }
      ,
    error =>
    {
      console.log(error);
       
    }    
      );
}

}
