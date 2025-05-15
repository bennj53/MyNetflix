import {Component, Input, input, InputSignal} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {FilmCarteComponent} from "../film-carte/film-carte.component";
import {Observable, of} from 'rxjs';
import {Film} from '../../models/film';

@Component({
  selector: 'app-film-list',
  imports: [
    AsyncPipe,
    FilmCarteComponent,
    NgForOf
  ],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css'
})
export class FilmListComponent {
  @Input({required: true}) films$!: Observable<Film[]>;
}
