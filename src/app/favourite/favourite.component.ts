import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  isFavourit!: boolean;
  title!: string;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isFavourit = !this.isFavourit;
  }
}
