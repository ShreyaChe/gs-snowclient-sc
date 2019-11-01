import { Component, OnInit } from '@angular/core';
import { NodejService} from '../nodej.service' ;
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup , FormArray} from '@angular/forms'
@Component({
  selector: 'app-updtincdnt',
  templateUrl: './updtincdnt.component.html',
  styleUrls: ['./updtincdnt.component.css']
})
export class UpdtincdntComponent implements OnInit {
  form: FormGroup; 
  public incident;
  callers: Array<any> = ['Select Caller'];
  cntcttyp = ['None'];
  ctgry = ['None']
  incdntst=[]
  impct;
  desc;
   
  constructor(private route: ActivatedRoute,private nodejservice:NodejService) { }

  ngOnInit() {

    this.incident =  {cntcttype:'',state: '', ctgry: '' ,impct:'',desc:'',email:'',password:'',no:'',sysid:''}
    this.incident.no =this.route.snapshot.paramMap.get('incno')
    this.incident.email= localStorage.getItem('user');
    this.incident.password=localStorage.getItem('pwd');
 //   this.incdntst = ['New', 'In Progress','On Hold','Resolved','Closed','Canceled']
   // this.cntcttyp = ['Email','Phone','Self-service','Walk-in'];
   // this.ctgry = ['Inquiry / Help','Software','Hardware','Network','Database']
  //  this.impct = ['1 - High','2 - Medium' , '3 - Low']
    this.getIncdntdtl(this.incident)
  }
  getIncdntdtl(incdnt)
  { this.nodejservice.viewIncdnt(incdnt).subscribe(
     
     response=>
     {
       if (response.response )
         
       {
        response.response.forEach(element => {
        this.incident.cntcttype = element.contact_type
        this.incident.state = element.state
        this.incident.ctgry = element.category
        this.incident.sysid = element.sys_id
        this.incident.impct = element.impact
        this.incdntst = [this.incident.state,'New', 'In Progress','On Hold','Resolved','Closed','Canceled']
        this.cntcttyp = [this.incident.cntcttype ,'Email','Phone','Self-service','Walk-in'];
        this.ctgry = [ this.incident.ctgry,'Inquiry / Help','Software','Hardware','Network','Database']
        this.impct = [this.incident.impct,'1 - High','2 - Medium' , '3 - Low']
        this.incident.desc = element.short_description
        this.desc=this.incident.desc
        })
      }
       else
         { alert('No incident found')  }
       }
       ,
     error =>
     {
       console.log(error);
        
     }    
       );}

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
  updtIncdnt() 
  { 
    this.incident.desc = this.desc
    this.nodejservice.updIncdnt(this.incident).subscribe(
      // this.snowservice.oauthLogin(this.loginForm.value).subscribe(
       response=>
       {
         if (response.response )
           
         { 
            
            console.log(response.response)
            alert(response.response + " Updated")
           }
           else {alert(response.error) }
         }
         ,
       error =>
       {
         console.log(error);
          alert(error)
       }    
         );}
  

}
