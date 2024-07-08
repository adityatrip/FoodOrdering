import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gmail-signup24',
  templateUrl: './gmail-signup24.component.html',
  styleUrls: ['./gmail-signup24.component.css']
})
export class GmailSignup24Component implements OnInit {

  gmailForm = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    dateOfBirth: new FormGroup({
      month: new FormControl(null, Validators.maxLength(2)),
      day: new FormControl(null, Validators.maxLength(2)),
      year: new FormControl(null, Validators.maxLength(4)),
    }),
    gender: new FormControl(null),
    // add form controls for custom gender post selection in gender.
    email: new FormControl(null, Validators.email),
    password: new FormControl(null),
    passwordConfirm: new FormControl(null),
    countryPinAndMobile: new FormGroup({
      countryPin: new FormControl(null, Validators.required),
      mobileNumber: new FormControl(null, Validators.required)
    }),
    confirmCode: new FormControl(null, [Validators.required, Validators.maxLength(6)])
  });

  ngOnInit(): void {
      
  }

  onSubmit() {

  }
}
// Gmail Signup Form
// 1. First Name
// 2. Last Name
// 3. Month, Day, Year. with basic validations. 3 different input boxes, first with a dropdown of months with place holder month, third with label Year, simple input restricting max 4 letters, 2 for day.
// Day, year must be numeric and day less then 32,  Validations must be case specific. Year can not be more than current year
// 4. Gender with 4 values: Female, Male, Rather Not Say, Custom
// When user selects Custom, add first input box with label: 'What's your gender', 
// and second dropdown with Label: 'Please refer to me as' and 3 options: Male, Female, Other.
// 5. Show 2 Dynamic Option to select email address with radio buttons and 3rd option to Create your custom Gmail address. Upon clicking 3rd option, we will provide input to enter custom email address.
// A validation Message: 'That username is taken. Try again.' should be shown after some time.
// 6. Input to user for entering password
// 7. Input for reentering password 
// Validations for atleast 8 characters: 'Use 8 characters or more for your password.'
// If passwords don't match, then remove the value of second input, and a validation message: 'Those passwords didn't match. Try again.'
// Check for password complexicity and make user follow the rule: Password must contain letters, numbers and symbols
// Show Validation message: 'Please choose a stronger password. Try a mix of letters, numbers, and symbols.'
// 8. A checkbox to show passwords.
// 9. Display 1 dropdown for country code, and and input box for mobile number
// Validate that only numbers are entered in phone number. Validation message: 'This phone number format is not recognized. Please check the country and number.'
// 10. An input box to enter code, which can contain numbers only. Validation Message: 'Enter a code', 'Code has numbers only. Try again.', 'Wrong number of digits.', 'Wrong code. Try again.'.
