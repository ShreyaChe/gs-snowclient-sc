import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NodejService} from '../nodej.service' ;
@Component({
  selector: 'app-viewincdntdtl',
  templateUrl: './viewincdntdtl.component.html',
  styleUrls: ['./viewincdntdtl.component.css']
})
export class ViewincdntdtlComponent implements OnInit {
  incdnt; 
  constructor(private route: ActivatedRoute,private nodejservice:NodejService,private router:Router) { }
  incident;
  ngOnInit() {
    this.incdnt =this.route.snapshot.paramMap.get('incdnt')
    this.incident =  {cntcttype:'',state: '', ctgry: '' ,impct:'',desc:'',email:'',password:'',no:'',sysid:''}
    this.incident.no = this.incdnt
    this.incident.email= localStorage.getItem('user');
    this.incident.password=localStorage.getItem('pwd');
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
      this.incident.impct = element.impact
      this.incident.desc = element.short_description
      this.incident.sysid  = element.sys_id
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
     );
    }
updIncdnt(){
       
    this.router.navigate(['/updtincdnt',this.incdnt]);
    console.log(this.incdnt)
    //  this.router.navigate(['/updtincdnt']);
     }

 dltIncdnt()
 {
  
  this.nodejservice.dltIncdnt(this.incident).subscribe(
     
     response=>
     {
       if (response.response )
         
       { 
          
          console.log(response.response)
          alert("incident Deleted")
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
