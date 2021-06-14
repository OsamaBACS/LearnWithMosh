import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  // templateUrl: './course.component.html',
  // use Pipe Operator
  template: `
    {{ course.title | uppercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number: '1.2-2' }} <br />
    {{ course.price | currency: 'USD':true:'3.2-2' }} <br />
    {{ course.releaseDate | date: 'shortDate' }} <br />
    <hr />
    {{ text | summary: 10 }}
    <hr />
    <i [ngClass]="{ 'bi bi-star': iconClicked }" (click)="onClickIcon()"></i>
  `,
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1),
  };

  iconClicked = true;

  text = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  `;

  constructor() {}

  ngOnInit(): void {}

  onClickIcon() {
    if (!this.iconClicked) this.iconClicked = true;
  }
}
