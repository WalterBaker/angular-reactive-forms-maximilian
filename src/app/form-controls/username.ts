import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.html'
})
export class Username implements OnInit {

    // parentForm is for module data passing
    @Input() public parentForm: FormGroup;

    public formControl: FormControl;
    public id: string = 'username';

    public formGroup: FormGroup;
    public formGroupId: string = "usernameGroup"
    public path: string = this.formGroupId + ' ' + this.id;

    ngOnInit() {
      this.formControl = new FormControl(null, [Validators.required, this.validatorForbiddenNames.bind(this)]);
      this.formGroup = new FormGroup({});
      this.formGroup.addControl(this.id, this.formControl);

      // We add the FormGroup to the parent form.
      // 
      this.parentForm.addControl(this.formGroupId, this.formGroup);
    }

    /*
    constructor(parentForm: FormGroup) {
        this.parentForm = parentForm;
        this.formControl = new FormControl(null, [Validators.required, this.validatorForbiddenNames.bind(this)]);
    }    
    */

    /*
    ngOnInit() {
        this.formControl = new FormControl(null, [Validators.required, this.validatorForbiddenNames.bind(this)]);
    }
    */

    // Doesn't work for the forbiddenNames method.
    // forbiddenUsernamesErrorCode: string = "nameIsForbidden";

    // This doesn't work
    /* 
    validatorForbiddenNames(control: FormControl): {[s: string]: boolean} {
      if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
        return {forbiddenUsernamesErrorCode : true};
      }
      return null;
    }
    */

    forbiddenUsernames = ['Chris', 'Anna'];

    validatorForbiddenNames(control: FormControl): {[s: string]: boolean} {
      if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
        return {"nameIsForbidden" : true};
      }
      return null;
    }

    InvalidAndTouched(){
        return (!this.parentForm.get(this.path).valid && 
                 this.parentForm.get(this.path).touched);
    }
    
    ValueIsRequired(){
        return this.parentForm.get(this.path).errors['required'];
    }
    
    ValueIsForbidden(){
        return this.parentForm.get(this.path).errors["nameIsForbidden"];
    }
}