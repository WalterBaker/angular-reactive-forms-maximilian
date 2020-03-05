import { Component, OnInit } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { Username } from './form-controls/username';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  signupForm: FormGroup;
  username: Username;

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({});

    // Username
    this.username = new Username(this.signupForm);
    this.signupForm.addControl(this.username.id, this.username.formControl);

  }

  onSubmit(){
      console.log(this.signupForm);
      this.signupForm.reset();
  }

  IsFormInvalid(){
    return (!this.signupForm.valid && this.signupForm.touched);
  }


}
