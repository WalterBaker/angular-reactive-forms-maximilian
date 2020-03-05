import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  signupForm: FormGroup;

  constructor() {}

  usernameId = 'username';
  usernamePath = 'username';

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username' : new FormControl()
    });   
  }

  onSubmit(){
      console.log(this.signupForm);
      this.signupForm.reset();
  }

  IsFormInvalid(){
    return (!this.signupForm.valid && this.signupForm.touched);
  }
}
