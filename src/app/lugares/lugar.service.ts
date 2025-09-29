import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lugar } from './lugar';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  salvar(lugar: Lugar) {
    return this.http.post<Lugar>(`${this.baseUrl}/lugares`, lugar);
  }

  obterTodos() : Observable<Lugar[]>{
    return this.http.get<Lugar[]>(`${this.baseUrl}/lugares`);
  }
}
