import { Component, OnInit } from '@angular/core';
import { cpuContent } from './cpuContents';
import {cpuDataService} from './cpuDataService';
@Component({
  selector: 'my-app-hardware-details',
  templateUrl: './hardware-details.component.html',
  styleUrls: ['./hardware-details.component.scss']
})
export class HardwareDetailsComponent implements OnInit {

  constructor(private cpuDataService: cpuDataService) {}
  batteryInfo;
  cpuInfo;
  batteryDetails:cpuContent[]=[]; 
 cpuContentList :cpuContent[]=[]; 
 
  loading: boolean = false;
  errorMessage
  ngOnInit(): void {
    console.log("Start")
    this.getcpuDetails();
    console.log('this.getfile') 
   }
  public getcpuDetails() {
    console.log('inside this')
    this.errorMessage = "";
    this.cpuDataService.getCpuDetails()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received'+response)
        
          console.log(response);
          this.cpuInfo=response.cpu;
          this.batteryInfo=response.battery;
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

    for (let key in this.cpuInfo) {
      const  content:cpuContent={name :key,
        value:this.cpuInfo[key]}
        this.cpuContentList.push(content);
  }
  
  for (let key in this.batteryInfo) {
    const  content:cpuContent={name :key,
      value:this.batteryInfo[key]}
      this.batteryDetails.push(content);
}
  
}

}
