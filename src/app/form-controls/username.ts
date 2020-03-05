import { FormControl, FormGroup, Validators } from '@angular/forms';

export class Username {

    public parentForm: FormGroup;

    public id: string = 'username';
    public path: string = this.id;

    public formControl: FormControl;

    constructor(parentForm: FormGroup) {
        this.parentForm = parentForm;
        this.formControl = new FormControl(null, [Validators.required, this.validatorForbiddenNames.bind(this)]);
    }    

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