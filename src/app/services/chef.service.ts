import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Ingredient {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  constructor(private http: HttpClient) { }

  searchIngredients(query: string): Observable<Ingredient[]> {
    const API_KEY = '';
    return this.http.get<Ingredient[]>(`https://api.spoonacular.com/food/ingredients/search?apiKey=${API_KEY}&query=${query}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(map((res: any) => res.results));
  }
}
