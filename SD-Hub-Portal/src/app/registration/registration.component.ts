import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  islinear = false;
  firstFormGroup!:FormGroup;
  secondFormGroup!:FormGroup;
  thirdFormGroup!:FormGroup;
  fourthFormGroup!:FormGroup;

  constructor(
    private _formBuilder:FormBuilder
  ){}

ngOnInit():void{
  this.firstFormGroup = this._formBuilder.group({
    studentID: ['', Validators.required],
    appDate: ['', Validators.required],
    firstName: ['', Validators.required],
    middleName: ['', Validators.required],
    lastName: ['', Validators.required],
    f_firstname: ['', Validators.required],
    f_middlename: ['', Validators.required],
    f_lastname: ['', Validators.required],
    dob: ['', Validators.required],
    phnp: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    p_contact: ['', Validators.required],
    income: ['', Validators.required],
  });
  this.secondFormGroup = this._formBuilder.group({
    secCtrl: ['', Validators.required],
    Degree: ['', Validators.required],
    Collegename: ['', Validators.required],
    Year: ['', Validators.required],
    Percentage: ['', Validators.required],
  });
  this.thirdFormGroup = this._formBuilder.group({
    studentsign: ['', Validators.required],
    Parentsign: ['', Validators.required],
    Dateapp: ['', Validators.required]
  });
}
onsubmit():void{
  const formdata={
    ...this.firstFormGroup.value,
    ...this.secondFormGroup.value,
    ...this.thirdFormGroup.value
  };
console.log(formdata)

  this.fourthFormGroup = this._formBuilder.group({
  })
}  
}


