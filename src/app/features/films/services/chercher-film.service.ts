import {Injectable} from '@angular/core';
import {env} from '../../../../env/env';
import {HttpClient} from '@angular/common/http';
import {map, Observable, of} from 'rxjs';
import {Film} from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class ChercherFilmService {
  private urlFilmsAPI: string = env.tmdbApiUrl

  constructor(private httpClient: HttpClient) {
  }

  mapFilmFromJson(json: any): Film {
    return {
      id: json.id,
      title: json.title,
      originalTitle: json.original_title,
      overview: json.overview,
      releaseDate: json.release_date,
      note: json.vote_average,
      voteCount: json.vote_count,
      posterUrl: `https://image.tmdb.org/t/p/w500${json.poster_path}`,
      backdropUrl: `https://image.tmdb.org/t/p/w780${json.backdrop_path}`,
      genres: json.genre_ids,
      originalLanguage: json.original_language,
      isAdult: json.adult
    }
  }

  chercherFilmParPopularityDesc(): Observable<Film[]> {
    console.log('getTousLesFilms');
    //return of(this.films);
    let request: string = this.urlFilmsAPI + 'discover/movie';
    return this.httpClient.get<any>(request, {
      headers: {
        Authorization: `Bearer ${env.tmdbToken}`,
      },
      params: {
        include_adult: 'false',
        include_video: 'false',
        language: 'fr-FR',
        page: '1',
        sort_by: 'popularity.desc'
      }
    }).pipe(map(response => response.results.map(this.mapFilmFromJson)));
  }

  chercherFilmParTitre(title: string): Observable<Film[]> {
    console.log(`chercherFilmParTitre: ${title}`);
    let request: string = this.urlFilmsAPI + 'search/movie?query=' + title + '&include_adult=false&language=fr-FR&page=1';
    return this.httpClient.get<any>(request, {
      headers: {
        Authorization: `Bearer ${env.tmdbToken}`,
      }
    }).pipe(
      map((response: any) => response.results.map((json: any) => this.mapFilmFromJson(json))),
      map((films: Film[]) => films.filter(film => film.title.toLowerCase().includes(title.toLowerCase())))
    );
  }
}
