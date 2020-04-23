import { Component, OnInit } from '@angular/core';
import { cpuContent } from './cpuContents';
import {cpuDataService} from './cpuDataService';

@Component({
  selector: 'frontend-app-hardware-details',
  templateUrl: './hardware-details.component.html',
  styleUrls: ['./hardware-details.component.css']
})
export class HardwareDetailsComponent implements OnInit {

  constructor(private cpuDataService: cpuDataService) {}
  systemInfo;
  biosInfo;
  baseBoardInfo;
  chassisInfo;
 system:cpuContent[]=[]; 
 bios :cpuContent[]=[]; 
 baseBoard :cpuContent[]=[]; 
 chassis :cpuContent[]=[]; 

 
  loading: boolean = false;
  errorMessage
  ngOnInit(): void {
    console.log("Start")
    this.getHardWareDetails();
    console.log('this.getfile') 
   }
  public getHardWareDetails() {
    console.log('inside this')
    this.errorMessage = "";
    this.cpuDataService.getHardWareDetails()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received'+response)
        
          console.log(response);
          this.systemInfo=response.system;
          this.biosInfo=response.bios;
          this.baseBoardInfo=response.baseBoard;
          this.chassisInfo=response.chassis;
          this.formatContent();
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        )
  }

  public formatContent(){

    for (let key in this.systemInfo) {
      const  content:cpuContent={name :key,
        value:this.systemInfo[key]}
        this.system.push(content);
  }
  
  for (let key in this.biosInfo) {
    const  content:cpuContent={name :key,
      value:this.biosInfo[key]}
      this.bios.push(content);
}
for (let key in this.baseBoardInfo) {
  const  content:cpuContent={name :key,
    value:this.baseBoardInfo[key]}
    this.baseBoard.push(content);
}
  
for (let key in this.chassisInfo) {
  const  content:cpuContent={name :key,
    value:this.chassisInfo[key]}
    this.chassis.push(content);
}

}
}
