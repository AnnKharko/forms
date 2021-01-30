import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';


  // onInputAction(): void {
  //   console.log(this.title);
  // }


//   user = {name: 'vasya', age: 123};
//   submit(form: NgForm): void {
//     console.log(form);
//   }


  // ==========reactive forms============

  name = new FormControl('', [Validators.required, Validators.minLength(10), this.customFuckValidator]);
  age = new FormControl('');

  myForm = new FormGroup({
    name: this.name,
    age: this.age
  });

  xxx(myForm: FormGroup): void {
    console.log(myForm);
  }

  customFuckValidator(inputData: AbstractControl): any {
    if (inputData.value === 'fuck') {
      console.log(inputData);
      return {error: true, msg: 'fuck is present'};
    } else {
      return null;
    }
  }
}






