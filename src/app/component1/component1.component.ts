import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  counter:number=0;
  counterIng() {
    this.counter++;
  }
  counterDeg() {
    this.counter--;

  }
  ngOnInit(): void {
    console.log("OnInit")
  }
  ngOnChanges(): void {
    console.log('OnChange')
  }
ngDoCheck(): void {
  console.log(" DoCheck",)
  
} 
ngAfterContentInit(): void {
  console.log("AfterContentInit")
}
ngAfterContentChecked(): void {
  console.log("AftercontenChecked")
}
ngAfterViewInit(): void {
  console.log("AfterrviewInit")
}
ngAfterViewChecked(): void {
  console.log("AfterrViewChecked")
}
ngOnDestroy(): void {
  console.log("OnDestroy")
}

}
