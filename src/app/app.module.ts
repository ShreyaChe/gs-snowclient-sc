import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms' ;
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/guards/auth-guard.service' ;
import { AuthService } from './shared/guards/auth.service' ;
import { AppRoutingModule } from './app-routing.module';
import { LoginRedirect } from './shared/guards/login-redirect.guard';
import { HomeComponent } from './home/home.component';
import { CrtincdntComponent } from './crtincdnt/crtincdnt.component';
import { OpenincdntsComponent } from './openincdnts/openincdnts.component' ;
import { TableModule} from 'primeng/table';
import { DropdownModule,InputTextModule} from 'primeng/primeng';
import { RegisterComponent } from './register/register.component' ;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CrtincdntComponent,
    OpenincdntsComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  
    AppRoutingModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() { 
        return localStorage.getItem('token');
        } 
     }
   })
  ],
  providers: [AuthGuardService,
    AuthService, 
    LoginRedirect],
  bootstrap: [AppComponent]
})
export class AppModule { }
