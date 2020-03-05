import { Component, OnInit } from '@angular/core';
import { FormGroup, } from '@angular/forms';

import { Hobbies} from './form-controls/hobbies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  signupForm: FormGroup;
  hobbies: Hobbies;

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({});

    // Hobbies
    this.hobbies = new Hobbies(this.signupForm);
    this.signupForm.addControl(this.hobbies.id, this.hobbies.formArray);
  }

  onSubmit(){
      console.log(this.signupForm);
      this.signupForm.reset();
  }

  IsFormInvalid(){
    return (!this.signupForm.valid && this.signupForm.touched);
  }


}
