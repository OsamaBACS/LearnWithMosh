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
    {{ course.releaseDate }} <br />
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

  constructor() {}

  ngOnInit(): void {}
}
