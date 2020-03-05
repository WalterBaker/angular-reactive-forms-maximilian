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
  usernamePath = 'username' // Change if necessary.

  forbiddenUsernames = ['Chris', 'Anna'];

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)])
    });   
  }

  onSubmit(){
      console.log(this.signupForm);
      this.signupForm.reset();
  }

  IsFormInvalid(){
    return (!this.signupForm.valid && this.signupForm.touched);
  }

  InvalidAndTouched(){
    return (!this.signupForm.get(this.usernamePath).valid && 
             this.signupForm.get(this.usernamePath).touched);
  }

  ValueIsRequired(){
      return this.signupForm.get(this.usernamePath).errors['required'];
  }

  ValueIsForbidden(){
      return this.signupForm.get(this.usernamePath).errors['nameIsForbidden'];
  }
}
