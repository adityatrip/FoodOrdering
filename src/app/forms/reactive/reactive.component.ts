import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserNames = ['Chris','Rosie','Stephnie'];
  
  signupForm : FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required, this.forbiddenNames.bind(this)),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      }, Validators.required),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signupForm.get('userData.email').valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.signupForm.statusChanges.subscribe((status) => {
      console.log('Status: ', status);
    });
  }

  submitForm() {
    console.log('Sign Up form: ---', this.signupForm);
  }

  onAddHobby() {
    const formCtrl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(formCtrl);
    console.log((<FormArray>this.signupForm.get('hobbies')).controls[0]);
  }

  controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  // custom validation method in form
  async forbiddenNames(control: FormControl): Promise<{[key: string]: boolean}> {
    if (this.forbiddenUserNames.includes(control.value)) {
      return { isUserNameForbidden: true }
    }
    return null;
  }

  // custom validation method for API res
  forbiddenEmails(control: FormControl) : Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (control.value == 'test@test.com') {
          resolve({emailIsForbidden: true})
        }
        resolve(null);
      }, 1500);
    })
  }

  isEmailForbidden(): boolean {
    if (this.signupForm?.get('userData.email')?.errors !== null && this.signupForm?.get('userData.email')?.errors['emailIsForbidden']) {
      return true;
    } 
    return false;
  }

  isEmailRequired(): boolean {
    if (this.signupForm?.get('userData.email')?.errors !== null && this.signupForm?.get('userData.email')?.errors['required']) {
      return true;
    }
    return false;
  }

  isEmailValid(): boolean {
    if (this.signupForm?.get('userData.email')?.errors?.['email']) {
      return true;
    }
    return false;
  }





  //Difference between FormGroup and FormArray
  // Difference between FormControl and FormGroup
}
