import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  /* Character */
  getCharacters(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/character/?page=${page}`);
  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }

  filterCharacters(filters: any, page: number = 1): Observable<any> {
    let params = new HttpParams();
    for (const key in filters) {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    }
    params = params.set('page', page.toString());
    return this.http.get(`${this.apiUrl}/character`, { params });
  }

  searchCharacters(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/?name=${query}`);
  }

  filterCharactersGlobal(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/?name=${query}`);
  }
  /* ======================================================= */

  /* Episode */
  getEpisodes(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode/?page=${page}`);
  }

  getEpisodeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode/${id}`);
  }

  filterEpisodes(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode/?name=${query}&page=${page}`);
  }
  /* ======================================================== */

  /* Location */
  getLocations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/location`);
  }

  getLocationById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/location/${id}`);
  }
  /* ======================================================== */

  /* Statistic */
  getStatistics(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
