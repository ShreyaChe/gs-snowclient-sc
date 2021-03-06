import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './login/login.component' ;
import { HomeComponent} from './home/home.component'
import { LoginRedirect} from './shared/guards/login-redirect.guard';
import { CrtincdntComponent} from './crtincdnt/crtincdnt.component';
import { OpenincdntsComponent} from './openincdnts/openincdnts.component' ;
import { RegisterComponent} from './register/register.component' ;
import { ViewincdntdtlComponent} from './viewincdntdtl/viewincdntdtl.component' ;
import { UpdtincdntComponent} from './updtincdnt/updtincdnt.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
 
  
  {path:'login', component:LoginComponent }, 
  //{path:'login', component:LoginComponent , canActivate:[LoginRedirect]},
  // {path:'home',component:HomeComponent,canActivate: [LoginRedirect]},
  {path:'home',component:HomeComponent},
  {path:'crtincdnt',component:CrtincdntComponent},
  {path:'viewincdntdtl/:incdnt',component:ViewincdntdtlComponent},
  {path:'register', component:RegisterComponent},
  //{path:'updtincdnt',component:UpdtincdntComponent },
  { path:'updtincdnt/:incno',component:UpdtincdntComponent},
  { path:'opnincdnts',component:OpenincdntsComponent},
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
