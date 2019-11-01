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
  cntcttyp = ['None'];
  ctgry = ['None']
  impct;
  desc;
  incdntst;
  constructor(private router:Router,private http: HttpClient,private formBuilder: FormBuilder,private nodejservice:NodejService) { }

  ngOnInit() {
    this.incident =  [{cntcttype:'',state: '', ctgry: '' ,impct:'',desc:'',email:'',password:''}]
    this.incident.email= localStorage.getItem('user');
    this.incident.password=localStorage.getItem('pwd');
    this.incdntst = ['New', 'In Progress','On Hold','Resolved','Closed','Canceled']
    this.cntcttyp = ['Email','Phone','Self-service','Walk-in'];
    this.ctgry = ['Inquiry / Help','Software','Hardware','Network','Database']
    this.impct = ['1 - High','2 - Medium' , '3 - Low']
     
  }
  changeCntct(cnt){
    this.incident.cntcttyp = cnt ;
  }
  changestate(st) {
    this.incident.state= st;
     
  }
  changeCtg(ctg){
    this.incident.ctgry=ctg

  }
  changeImpct(imp){
    this.incident.impct=imp
  }
  createIncdnt() 
  { 
    this.incident.desc = this.desc
    this.nodejservice.newIncdnt(this.incident).subscribe(
      // this.snowservice.oauthLogin(this.loginForm.value).subscribe(
       response=>
       {
         if (response.response )
           
         { 
            
            console.log(response.response)
            alert(response.response + " created")
           }
         }
         ,
       error =>
       {
         console.log(error);
          
       }    
         );}
  back(){
    this.router.navigate(['/home']);
  }
}
