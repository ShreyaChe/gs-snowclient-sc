import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators}  from '@angular/forms';
import { SnowserviceService} from '../snowservice.service' ;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private router:Router,private fb:FormBuilder, private snowservice :SnowserviceService) { }

  ngOnInit() {
    this.loginForm  = this.fb.group({

      email: [''],
      password: [''],

  })
  }

  oauth2Login()
  {
  this.snowservice.oauthLogin(this.loginForm.value).subscribe(

    response=>
    {
      if (response['access_token'])
      {
        this.router.navigate(['/home']);

        //login successful if there's a Spring Session token in the response
        if (response && response['access_token'])
        {
          //store user details and Spring Session OAuth token refreshes
          localStorage.setItem('access_token', response['access_token']);
          localStorage.setItem('refresh_token', response['access_token']);
          localStorage.setItem('token_type', response['token_type']);
          localStorage.setItem('scope', response['scope']);
          localStorage.setItem('isLoggedIn', 'true');

         // this.getUserInfoUsingOAuth2Token(response['access_token']);
        }
      }
      else
      {
        this.router.navigate(['/login']);
      }
    },
    error =>
    {
      console.log(error);
       
    }    
      );
}

}
