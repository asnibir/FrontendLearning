import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  catagoryLists = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 1, name: 'Languages' },
  ];

  submit(course: any) {
    console.log(course);
  }

  form = new FormGroup({
    topics: new FormArray([])
  });

  // using FormBuilder Object
  form2;
  constructor(fb: FormBuilder){
    this.form2 = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }


  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }

  removeTopic(topic: any) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
