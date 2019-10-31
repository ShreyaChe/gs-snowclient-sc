import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnowserviceService} from '../snowservice.service' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private snowservice :SnowserviceService) { }

  ngOnInit() {
  }
  createincident()
  { this.router.navigate(['/crtincdnt']);}

  showincdnts() 
  {this.router.navigate(['/opnincdnts']);}
}
