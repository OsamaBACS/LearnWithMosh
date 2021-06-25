import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent {
  // categories = [
  //   { id: 1, name: 'Development' },
  //   { id: 2, name: 'Arts' },
  //   { id: 3, name: 'Languages' },
  // ];
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: ['', Validators.email, Validators.required],
        phone: ['', Validators.required],
      }),
      topics: fb.array([]),
    });
  }

  submit(f: any) {
    console.log(f);
  }

  addTopic(topic: HTMLInputElement) {
    this.formData.push(new FormControl(topic.value));
    topic.value = '';
  }

  get formData() {
    return <FormArray>this.form.get('topics');
  }

  removeTopic(topic: any) {
    let index = this.formData.controls.indexOf(topic);
    this.formData.removeAt(index);
  }
}
