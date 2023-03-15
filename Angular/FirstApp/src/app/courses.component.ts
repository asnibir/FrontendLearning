import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `

        {{ myInfo.Name | uppercase }} <br/>
        {{myInfo.Age}} <br/>
        {{myInfo.Height | number}} <br/>
        {{myInfo.Monthly_Income | currency:'৳'}} <br/>
        {{myInfo.DoB | date}} <br/>

        {{ text | summary:10 }}

        <h2>{{ "Title: " + title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <h1 style="color: crimson;">A Random Image</h1>
        <!-- <img src="{{ imageUrl }}" /> -->
        <img [src]="imageUrl"/> <!-- Property binding -->
        <br>
        <br>

        <h3>Here is a table.</h3>
        <table style="border: 1px solid black;">
            <tr>
                <td attr.colspan = "{{colSpan}}">HELLO</td>
                <td [attr.colspan] = "colSpan">ANGULAR</td>
            </tr>
            
        </table>
        <br>

        <h2>A Button</h2>
        <div (click) = "onDivClicked()">
            <button class="btn btn-primary" [class.active]="isActive" 
                    [style.backgroundColor]="isActive ? 'blue' : 'red' "
                    (click)="onSave($event)">Save</button>
        </div>
        <br>

        <input (keyup.enter)="onKeyUp($event)" />
        <br>

        <br>
        <input style="background-color: aquamarine;" [(ngModel)]="email" (keyup.enter)="onKeyUpEmail()"/>
    ` 
}) 
// we can also use value of function

export class CoursesComponent {
    title = "List of courses";
    imageUrl = "https://picsum.photos/200/300";
    colSpan = 10;

    myInfo = {
        Name: "Abu Shaikh Nibir",
        Age: 24,
        Height: 5.32152,
        Monthly_Income: 40000,
        DoB: new Date(1998, 4, 23)
    }
    
    text = `Hello everyone. I'm Abu Shaikh Nibir. I'm currently learning
    Angular for frontend developing.`;

    isActive = true;

    getTitle() {
        return this.title;
    }

    onDivClicked(){
        console.log("Div was clicked.");
    }

    onSave($event: MouseEvent){
        $event.stopPropagation();
        console.log("Buttone was clicked", $event);
    }

    onKeyUp($event: any) {
        console.log("Enter was pressed");
        console.log($event.target.value);
        
    }

    email = "abushaikhnibir@gmail.com";
    onKeyUpEmail(){
        console.log(this.email);
    }

    courses;
    constructor(service: CoursesService) { // Dependency injection
        this.courses = service.getCourses();
    }

}