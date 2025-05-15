import {Component, input, Input, InputSignal} from '@angular/core';
import {Film} from '../../models/film';

@Component({
  selector: 'app-film-carte',
  imports: [],
  templateUrl: './film-carte.component.html',
  styleUrl: './film-carte.component.css'
})
export class FilmCarteComponent {
  @Input() titleViaInput: string = "";
  noteViaInputSignal: InputSignal<number> = input(-1);
  img: InputSignal<string> = input("");
  overview: InputSignal<string> = input("");
}
