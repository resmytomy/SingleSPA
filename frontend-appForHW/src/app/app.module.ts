import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component';
import {EmptyRouteComponent} from './empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareDetailsComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
