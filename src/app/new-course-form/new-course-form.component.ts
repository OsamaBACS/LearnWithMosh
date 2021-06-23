import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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
  form = new FormGroup({
    topics: new FormArray([])
  });

  constructor() {}

  submit(f: any) {
    console.log(f);
  }

  addTopic(topic: HTMLInputElement){
    this.formData.push(new FormControl(topic.value));
    topic.value = '';
  }

  get formData(){
    return <FormArray>this.form.get('topics');
  }

  removeTopic(){

  }
}
