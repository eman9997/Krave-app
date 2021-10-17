import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Ingredient {
    id: number;
    name: string;
    body: string;
}


@Injectable({
    providedIn: 'root'
})
export class ChefService {

    searchOption = [];
    public ingredientsData: Ingredient[] | undefined;

    constructor(
        private http: HttpClient
    ) {
    }


    searchIngredients(query: string): Observable<Ingredient[]> {
        const API_KEY = '';
        return this.http.get<Ingredient[]>(`https://api.spoonacular.com/food/ingredients/search?apiKey=${API_KEY}&query=${query}`, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(map((res: any) => res.results));
    }

    filteredListOptions(): any[] {
        const ingredients = this.ingredientsData;
        const filteredIngredientsList = [];
        // @ts-ignore
        for (const ingredient of ingredients) {
            for (const options of this.searchOption) {
                // @ts-ignore
                if (options.title === ingredient.title) {
                    filteredIngredientsList.push(ingredient);
                }
            }
        }
        console.log(filteredIngredientsList);
        return filteredIngredientsList;
    }
}
