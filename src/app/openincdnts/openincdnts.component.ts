import { Component, OnInit } from '@angular/core';
import { SnowserviceService} from '../snowservice.service' ;
@Component({
  selector: 'app-openincdnts',
  templateUrl: './openincdnts.component.html',
  styleUrls: ['./openincdnts.component.css']
})
export class OpenincdntsComponent implements OnInit {
   
  cols: any[];

  incidents;
  constructor(private snowservice :SnowserviceService) { }

  ngOnInit() {
    this.incidents = [{number: '', priority: '',  state: '' ,  impact:  '',   category:  '',   subcategory:  '' ,  severity:  '' ,  urgency:  '' ,  incident_state:  '' ,  work_notes:  '' ,  comments:  '' ,  short_description:  '' ,   reassignment_count:  '' ,  opened_at:  '' , resolved_at: '',  closed_at: '' , caller_id: '' , opened_by: '' , closed_by: '' , resolved_by: '' , sys_updated_by:'' , sys_created_on: '', sys_updated_on: '' , sys_created_by:''  }]
    this.getIncidnts();
     
  }

 
  getIncidnts()

  {    
    console.log('here')
    this.snowservice.getIncidents().subscribe(
        data=>
        {
          // @ts-ignore
          this.incidents=data.result;
        },
        error1 =>
        {
          console.log('Failed to load incidents');
          console.log(error1)
        }
      );
  }
}
