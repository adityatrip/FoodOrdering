import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  @ViewChild('f') signupForm: NgForm | undefined;
  defaultValue = 'pet';
  answer = '';
  genders = ['male', 'female'];
  userDetails = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  formSubmitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // console.log(this.signupForm);
    // this.signupForm?.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: this.defaultValue,
    //   questionAnswer: '',
    //   gender: ''
    // });
    this.signupForm?.form.patchValue({
      userData: {
        username: suggestedName
      },
    });
  }

  onSubmit(form: NgForm) {
    console.log('form submitted.', form);
    this.formSubmitted = true;
    // console.log('view child approach: ',this.signupForm);
    this.userDetails = {
      username: form.value.userData.username,
      email: form.value.userData.email,
      secretQuestion: form.value.secret,
      answer: form.value.questionAnswer,
      gender: form.value.gender
    };

    // form.reset();
    this.signupForm?.reset();
  }
}
