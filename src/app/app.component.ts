import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world';

  post = {
    title: 'Title',
    isFavorite: true,
  };
  //Exercise
  tweets = {
    body: 'Here is a body of a tweet',
    isLiked: true,
    likesCount: 10,
  };
  // Directives
  courses = [];
  // ng Switch
  viewMode = 'map';
  // ng For
  students = [{ id: 0, name: '' }];
  // ng Style
  canSave = true;

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite Changed!' + eventArgs);
  }
  onAdd() {
    this.students.push({ id: 4, name: 'Mostafa' });
  }
  onRemove(student: any) {
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }
  onChange(student: any) {
    student.name = 'UPDATED';
  }
  loadCourses() {
    this.students = [
      { id: 1, name: 'Osama' },
      { id: 2, name: 'Waleed' },
      { id: 3, name: 'Mohammad' },
    ];
  }
  trackStudent(index: number, student: any) {
    return student ? student.Id : undefined;
  }
}
