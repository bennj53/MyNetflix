import {Component} from '@angular/core';
import {ChercherFilmService} from '../../services/chercher-film.service';
import {catchError, map, Observable, of, startWith, switchMap} from 'rxjs';
import {Film} from '../../models/film';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FilmListComponent} from '../film-list/film-list.component';

@Component({
  selector: 'app-film-bar-de-recherche',
  imports: [
    ReactiveFormsModule,
    FilmListComponent
  ],
  templateUrl: './film-bar-de-recherche.component.html',
  styleUrl: './film-bar-de-recherche.component.css'
})
export class FilmBarDeRechercheComponent {

  searchGroup: FormGroup<{ title: FormControl<string | null> }> = new FormGroup({
    title: new FormControl<string>('')
  });

  films$: Observable<Film[]> = this.searchGroup.valueChanges.pipe(
    map(value => value.title ?? ''),
    startWith(''), // Charge tous les films au démarrage
    switchMap(title =>
      title
        ? this.chercherFilmService.chercherFilmParTitre(title)
        : this.chercherFilmService.chercherFilmParPopularityDesc()
    ),
    catchError(error => {
      console.error(error);
      return of([]); // Retourne une liste vide en cas d'erreur
    }),
  );

  constructor(private chercherFilmService: ChercherFilmService) {
  };

}
