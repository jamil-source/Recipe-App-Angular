import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesID = "631cbebe";
  recipesKey = "3cc213046c303c8c18315ae8dc86e066";
  searchQuery = '';
  recipesUrl:string = `https://api.edamam.com/search?app_id=${this.recipesID}&app_key=${this.recipesKey}&q=`;
  constructor(private http:HttpClient) { }

  getRecipe():Observable<Recipe>{
    return this.http.get<Recipe>(`${this.recipesUrl}r`);
  }

  searchRequest(search, types){
    const checkedTypes = [];
    types.forEach(type => {
      checkedTypes.push(type)
    });

    const convertType = checkedTypes.join('');
    console.log(types)

    return this.http.get<Recipe>(`${this.recipesUrl}${search}${convertType}`)
  }

  getRecipeDetails(id){
    return this.http.get<Recipe>(`https://api.edamam.com/search?app_id=${this.recipesID}&app_key=${this.recipesKey}&r=${id}`);
  }

}
