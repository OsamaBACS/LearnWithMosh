import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  Authors;

  constructor(private authorService: AuthorService) {
    this.Authors = authorService.getAuthors();
  }

  ngOnInit(): void {}
}
