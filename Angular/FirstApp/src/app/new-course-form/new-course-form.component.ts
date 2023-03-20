import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  catagoryLists = [
    {id:1, name:'Development'},
    {id:2, name:'Art'},
    {id:1, name:'Languages'},
  ];

  submit(course: any) {
    console.log(course);
  }
}
