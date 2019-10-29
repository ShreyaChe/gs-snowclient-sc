import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup , FormArray} from '@angular/forms';
import { NodejService } from '../nodej.service' ;
@Component({
  selector: 'app-crtincdnt',
  templateUrl: './crtincdnt.component.html',
  styleUrls: ['./crtincdnt.component.css']
})
export class CrtincdntComponent implements OnInit {
  form: FormGroup; 
  public incident;
  callers: Array<any> = ['Select Caller'];
  constructor(private router:Router,private http: HttpClient,private formBuilder: FormBuilder,private nodejservice:NodejService) { }

  ngOnInit() {
    this.incident =  [{caller: '', state: 'Open' ,description:''}]
    this.nodejservice.getUsers().subscribe(data => {
  
      data.forEach(element => {
        this.callers.push(element)
    
      });
      
  })
  }
  changeCaller(ind) {
    this.incident.caller= ind;
     
  }
  createIncdnt() 
  {
     
  }
}
