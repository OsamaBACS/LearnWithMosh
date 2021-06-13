import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <img src="{{ imageUrl }}" />
    <hr>
    <img [src]="imageUrl" />
    <hr>
    <table class="table table-bordered">
      <tr>
        <td [attr.colspan]="colSpan">Osama</td>
      </tr>
    </table>
    <hr>
    <input (keyup.enter)="onKeyUp($event)" />
    <hr>
    <!-- <input #email (keyup.enter)="onKeyUp2(email.value)" /> -->
    <hr>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp3()" />
    <hr>
    <div (click)="onDivClicked()">
      <button class="btn btn-primary"
              [class.active]="isActive"
              [style.backgroundColor]='isActive ? "blue" : "white"'
              (click)="onSave($event)">
            OK
      </button>
    </div>
  `,                                 // Class Binding         Style Binding                                         Event Binding

  styles: ['img {width: 200px; height: 200px}']
})
export class CoursesComponent {
  title = 'List of Courses';
  courses;
  imageUrl = "assets/images/p1.jpg";
  colSpan = 2;
  isActive = false;
  email: any;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  onSave($event: any){
    $event.stopPropagation(); // To Stop Event Bubbling
    console.log('Button Was Clicked', $event);
  }
  onDivClicked(){
    console.log('Div Was Clicked');
  }
  onKeyUp($event: any){
    console.log('Enter was Pressed');
    console.log($event.target.value);
  }
  onKeyUp2(email: any){
    console.log(email);
  }
  onKeyUp3(){
    console.log(this.email);
  }
}
