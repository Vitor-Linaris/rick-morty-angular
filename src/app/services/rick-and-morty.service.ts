import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/character`);
  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }

  getEpisodes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode`);
  }

  getEpisodeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode/${id}`);
  }

  filterCharacters(
    name: string,
    status: string,
    species: string
  ): Observable<any> {
    return this.http.get(`${this.apiUrl}/character`, {
      params: {
        name: name,
        status: status,
        species: species,
      },
    });
  }
}
