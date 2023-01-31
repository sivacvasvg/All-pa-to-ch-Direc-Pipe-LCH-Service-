import { Component, Input } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ang';
  movies=[
    {fname:'siva',lname:"kumar",eMail:"amesone"},
    {fname:'raja',lname:"kottai",eMail:"amesone"},
    {fname:'sanjey',lname:"kumar",eMail:"amesone"},
    {fname:'arjun',lname:"nujsk",eMail:"amesone"},
    {fname:'mathavan',lname:"gm",eMail:"amesone"},
    {fname:'pravin',lname:"kumar",eMail:"amesone"},
  ]
  
  result!:boolean;

  per:number=0.25567765445677;
  myNumber:Date=new Date();
  myName:string='sIva';
  largeFont='up ';
  colorBlue='blue';
  isLargeFont=true;
  isColorBlue=true;
  lowFont='low';
  colorRed='red';
  myPoint=12345.7568800;
  myCurrency=3500.50;
  allNumber!:string;
  email=new FormControl('abc@gmail.com', [Validators.required,Validators.minLength(4),Validators.maxLength(10)]);
  showEmailDetails() {
    console.log( 'Errors',this.email.errors);
  console.log( 'Valid',this.email.valid);

  }
rollNumber:string='5';
}


