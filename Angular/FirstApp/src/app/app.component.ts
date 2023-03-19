import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  task: any = {
    title: 'Review applications',
    assignee : null
  }

  courses2 = [1];
  title: string = "";
  courses: any;
  viewMode = 'map';

  loadCourses(){
    this.courses = [
      {id: 1, name: 'Algorithm 1'},
      {id: 2, name: 'Computer Graphics'},
      {id: 3, name: 'Linear Algebra'},
    ];
  
  }

  onAdd() {
    this.courses.push({id: 4, name: 'Economics'});
  }
  onRemove(course:any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course: any) {
    course.name = 'UPDATED';
  }

  canSave = true;

}
