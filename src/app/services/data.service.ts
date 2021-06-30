import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import {HttpClient} from '@angular/common/http'
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { map } from 'rxjs/operators';

@Inject({
  providedIn: 'root',
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  get(id: any) {
    return this.http.get(this.url + '/' + id).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  update(resource: any) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  delete(id: any) {
    return this.http.delete(this.url + '/' + id).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
    // .toPromise()
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404) return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}
