import { Component, Input, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,  DoCheck, OnChanges, OnDestroy, OnInit, } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input () currentCounter:any;
  ngOnInit(): void {
    console.log("OnInit--2")
  }
  ngOnChanges(): void {
    console.log('OnChange--2')
  }
ngDoCheck(): void {
  console.log(" DoCheck--2")
  
} 
ngAfterContentInit(): void {
  console.log("AfterContentInit--2")
}
ngAfterContentChecked(): void {
  console.log("AftercontenChecked--2")
}
ngAfterViewInit(): void {
  console.log("AfterrviewInit--2")
}
ngAfterViewChecked(): void {
  console.log("AfterrViewChecked--2")
}
ngOnDestroy(): void {
  console.log("OnDestroy--2")
}

}
