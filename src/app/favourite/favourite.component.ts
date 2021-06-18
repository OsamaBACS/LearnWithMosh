import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // Shadow DOM
})
export class FavouriteComponent implements OnInit {
  isFavourit!: boolean;
  title!: string;

  @Input('isFavorite') isSelected!: boolean;
  @Output('change') click = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
