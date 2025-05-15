import { Injectable } from '@angular/core';
import {env} from '../../env/env';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
private moviesAPI : string = env.tmdbApiUrl

  constructor(private httpClient : HttpClient) {
  }

  getAllMovies() {
    return this.httpClient.get(`${this.moviesAPI}/Top250Movies/k_3q2x5j8g`);
  }
}
