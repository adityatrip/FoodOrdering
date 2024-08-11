import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {

  projectForm = new FormGroup({
    projName: new FormControl(null, [Validators.required, this.checkForbiddenProjectName], this.asyncCheckForbiddenProjectName.bind(this)),
    // projName: new FormControl(null, [Validators.required], this.asyncCheckForbiddenProjectName.bind(this)),
    projEmail: new FormControl(null, [Validators.required, Validators.email]),
    projStatus: new FormControl(null, Validators.required)
  });
  message = '';
  showSubmittedDetails = false;

  ngOnInit(): void {
      
  }

  onProjSubmit() {
    if (this.projectForm.valid) {
      this.showSubmittedDetails = true;
    }
  }

  checkForbiddenProjectName(formControl): {[key: string]: boolean} {
    if (formControl.value == 'test') {
      return {'isProjNameForbidden': true};
    }
    return null;
  }

  asyncCheckForbiddenProjectName(formControl: FormControl): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formControl.value == 'testProject') {
          resolve({'isProjNameForbidden': true})
        }
        else resolve(null);
      }, 2000);
    });
    return promise;
  }

  checkForbiddenName() {
    if (this.projectForm.get('projName').errors?.isProjNameForbidden) {
      return true
    }
    return false;
  }

  onImageClick() {
    this.message = "I am dust.";
  }
}
