import { Component } from '@angular/core';
import { CascadingServiceService } from './cascading-service.service';
import {accessType} from './accessType';
import {portSpeed} from './portSpeed';
import {resilence} from './resilence';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CascadingServiceService]
})
export class AppComponent {
  SelectedAccessTypeID:accessType=new accessType(0,'ADSL')
  accessTypeIds : accessType[];
  portSpeedIds : portSpeed[];
  resilenceIds : resilence[];

  constructor(private _cascadingService: CascadingServiceService){
  	this.accessTypeIds=this._cascadingService.getAcessType();
  }

  onselect(accessTypeId){
  	this.portSpeedIds=this._cascadingService.getPortSpeed().filter((item)=>item.accessTypeID=accessTypeId);
  }
}

