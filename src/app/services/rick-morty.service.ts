import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getEpisodios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/episode`);
  }

  getEpisodioById(id: string | number): Observable<any> {
    return this.http.get(`${this.baseUrl}/episode/${id}`);
  }

  getPersonajes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/character`);
  }

  getPersonajeById(id: string | number): Observable<any> {
    return this.http.get(`${this.baseUrl}/character/${id}`);
  }

  getMultiplesPersonajes(ids: number[]): Observable<any> {
    return this.http.get(`${this.baseUrl}/character/${ids.join(',')}`);
  }
}