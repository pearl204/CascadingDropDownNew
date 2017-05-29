import { Injectable } from '@angular/core';
import {accessType} from './accessType';
import {portSpeed} from './portSpeed';
import {resilence} from './resilence';


@Injectable()
export class CascadingServiceService {

getAcessType(){
return[
new accessType(1,'ADSL'),
new accessType(2,'EDM'),
new accessType(3,'SuperFast'),
new accessType(4,'100M Fibre'),
new accessType(5,'1G Fibre')
];
  }

  getPortSpeed(){
  	return[
  	new portSpeed(1,1,'upto 24M'),
    new portSpeed(2,2,'2M'),
    new portSpeed(3,2,'6M'),
    new portSpeed(4,2,'10M'),
    new portSpeed(5,2,'20M'),
    new portSpeed(6,3,'40/10M'),
    new portSpeed(7,3,'80/20M'),
    new portSpeed(8,4,'2M'),
    new portSpeed(9,4, '10M'),
    new portSpeed(10,4, '20M'),
    new portSpeed(11,4, '50M'),
    new portSpeed(12,4, '100M'),
    new portSpeed(13,5, '100M'),
    new portSpeed(14,5, '200M'),
    new portSpeed(15,5, '500M'),
    new portSpeed(16,5, '1G')
  	];
  }

  getResilence(){
  	return [
     new resilence(1,1,1,'None'),
     new resilence(2,2,2,'None'),
     new resilence(3,2,2,'ADSL Backup'),
     new resilence(4,2,3,'None'),
     new resilence(5,2,3,'ADSL Backup'),
     new resilence(6,2,4,'None'),
     new resilence(7,2,4,'ADSL Backup'),
     new resilence(8,2,5,'None'),
     new resilence(9,2,5,'ADSL Backup'),
     new resilence(10,3,6,'None'),
     new resilence(11,3,6,'ASDL Backup'),
     new resilence(12,3,7,'None'),
     new resilence(13,3,7,'ADSL Backup'),
     new resilence(14,4,8,'None'),
     new resilence(15,4,8,'ADSL Backup'),
     new resilence(16,4,8,'Secure'),
     new resilence(17,4,8,'Secure+'),
     new resilence(18,4,9,'None'),
     new resilence(19,4,9,'ADSL Backup'),
     new resilence(20,4,9,'Secure'),
     new resilence(21,4,9,'Secure+'),
  	 new resilence(22,4,10,'None'),
     new resilence(23,4,10,'Secure'),
     new resilence(24,4,10,'Secure+'),
     new resilence(25,4,11,'None'),
     new resilence(26,4,11,'Secure'),
     new resilence(27,4,11,'Secure+'),
     new resilence(28,4,12,'None'),
     new resilence(29,4,12,'Secure'),
     new resilence(30,4,12,'Secure+'),
	 new resilence(31,5,13,'None'),
     new resilence(32,5,13,'Secure'),
     new resilence(33,5,13,'Secure+'),
 	 new resilence(34,5,14,'None'),
     new resilence(35,5,14,'Secure'),
     new resilence(36,5,14,'Secure+'),
 	 new resilence(37,5,15,'None'),
     new resilence(38,5,15,'Secure'),
     new resilence(39,5,15,'Secure+'),
 	 new resilence(40,5,16,'None'),
     new resilence(41,5,16,'Secure'),
     new resilence(42,5,16,'Secure+')


  	];
  }

}

