import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    })
  }

  onSubmitPost() {
    console.log(this.postForm.value);
  }

  onFetchAllPosts() {

  }

  onDeleteAllPosts() {

  }
}
