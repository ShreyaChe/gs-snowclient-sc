import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './login/login.component' ;
import { HomeComponent} from './home/home.component'
import { LoginRedirect} from './shared/guards/login-redirect.guard';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
 
  
  //{path:'login', component:LoginComponent,canActivate: [LoginRedirect]},
  {path:'login', component:LoginComponent , canActivate:[LoginRedirect]},
   {path:'home',component:HomeComponent,canActivate: [LoginRedirect]},

   { path: '', redirectTo: 'login', pathMatch: 'full' }
  
  
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
