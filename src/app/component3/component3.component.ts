import { Component, Input, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,  DoCheck, OnChanges, OnDestroy, OnInit, } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
@Input()currentCounter:any;
ngOnInit(): void {
  console.log("OnInit--3")
}
ngOnChanges(): void {
  console.log('OnChange--3')
}
ngDoCheck(): void {
console.log(" DoCheck--3")

} 
ngAfterContentInit(): void {
console.log("AfterContentInit--3")
}
ngAfterContentChecked(): void {
console.log("AftercontenChecked--3")
}
ngAfterViewInit(): void {
console.log("AfterrviewInit--3")
}
ngAfterViewChecked(): void {
console.log("AfterrViewChecked--3")
}
ngOnDestroy(): void {
console.log("OnDestroy--3")
}
}
