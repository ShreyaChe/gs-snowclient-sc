import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NodejService} from '../nodej.service' ;
import { HttpClient , HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-openincdnts',
  templateUrl: './openincdnts.component.html',
  styleUrls: ['./openincdnts.component.css']
})
export class OpenincdntsComponent implements OnInit {
   
  cols: any[];

  public incidents=[];
  incident;
  incdnt;
  user;
  constructor(private nodejservice:NodejService,private http: HttpClient,private router:Router) { }

  ngOnInit() {
    
    this.incident = {number: '', priority: '',  state: '' ,  impact:  '',   category:  '',   subcategory:  '' ,  severity:  '' ,  urgency:  '' ,  incident_state:  '' ,  work_notes:  '' ,  comments:  '' ,  short_description:  '' ,   reassignment_count:  '' ,  opened_at:  '' , resolved_at: '',  closed_at: '' , caller_id: '' , opened_by: '' , closed_by: '' , resolved_by: '' , sys_updated_by:'' , sys_created_on: '', sys_updated_on: '' , sys_created_by:''  }
     
    this.user = {email:'',password:''}
    this.user.email= localStorage.getItem('user');
    this.user.password=localStorage.getItem('pwd');
    this.getIncidnts(this.user);
    this.cols = [
      { field: 'number', header: 'Incident Id' },
      { field: 'state', header: 'Incident State'},
      { field: 'category', header: 'Category' },
      { field: 'subcategory', header: 'Subcategory'},
      { field: 'priority', header: 'Priority' },
      { field: 'assigned_to', header: 'Assigned To' },
      { field: 'assignment_group', header: 'Assignment Group' },
      { field: 'sys_created_on', header: 'Created Date' },
      { field: 'sys_updated_on', header: 'Last Updated' }
    ];
     
  }

 
  getIncidnts(usr)

  {    
    this.nodejservice.getIncdnts(usr).subscribe(
      // this.snowservice.oauthLogin(this.loginForm.value).subscribe(
       response=>
       {
         if (response.response )
           
         { 
            
          //  console.log(response.response)
        //    this.incidents = response.response
            response.response.forEach(element => {
              console.log(element.number)
              for (let key  in this.incident) {
                this.incident[key] = element[key]
              }
              this.incident.assigned_to = element.assigned_to.value
              this.incident.assignment_group = element.assignment_group.value
              console.log(this.incidents) 
              this.incidents.push(this.incident)
              this.incident = {number: '', priority: '',  state: '' ,  impact:  '',   category:  '',   subcategory:  '' ,  severity:  '' ,  urgency:  '' ,  incident_state:  '' ,  work_notes:  '' ,  comments:  '' ,  short_description:  '' ,   reassignment_count:  '' ,  opened_at:  '' , resolved_at: '',  closed_at: '' , caller_id: '' , opened_by: '' , closed_by: '' , resolved_by: '' , sys_updated_by:'' , sys_created_on: '', sys_updated_on: '' , sys_created_by:''  }
              console.log(this.incidents,'print')
              //this.incidents.concat(this.incident)
                //    console.log (element[key])
                 //  console.log (key) }
            //  console.log(element )
               for (let key  in element) {
                //   console.log (element[key])
                console.log (key) }
            });
           
           }
         else
           { console.log('Incidents not found')
         }}
         ,
       error =>
       {
         console.log(error);
          
       }    
         );}
  viewincdnt(inc)
  {
    this.incdnt=inc
    this.router.navigate(['/viewincdntdtl',inc]);
  }
  
}
