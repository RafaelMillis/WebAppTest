import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  checkoutForm;
  constructor(private formBuilder: FormBuilder) { 
    this.checkoutForm = formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(studentData){
    console.warn('your data has been submitted', studentData);
    alert( " did you add the ReactiveFormsModule from @angular/form to the app.module  ?");
    alert( studentData.address);
  }
}
