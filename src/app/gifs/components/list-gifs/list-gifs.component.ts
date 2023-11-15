import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-list-gifs',
  standalone: false,
  templateUrl: './list-gifs.component.html',
  styleUrl: './list-gifs.component.css'
})
export class ListGifsComponent {


  @Input()

  public gifs: Gif[] = []
}
