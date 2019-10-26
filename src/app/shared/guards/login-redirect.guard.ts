import { Router,CanActivate } from '@angular/router';
import { Injectable } from "@angular/core";


@Injectable()
export class LoginRedirect implements CanActivate{

    constructor(private router:Router){

    }

    canActivate():boolean{
        if(localStorage.getItem('token')){
            this.router.navigateByUrl('/home');
            return false;
        }else{
            return true;
        }
    }
}