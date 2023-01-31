import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPipePipe } from './new-pipe.pipe';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { ServicesService } from './services.service';
import { Com3Component } from './com3/com3.component';
import { Com4Component } from './com4/com4.component';



@NgModule({
  declarations: [
    AppComponent,
    NewPipePipe,
    Component1Component,
    Component2Component,
    Component3Component,
    Com1Component,
    Com2Component,
    Com3Component,
    Com4Component,
    
  
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
