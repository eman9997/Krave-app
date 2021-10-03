import { Component, OnInit } from '@angular/core';
import {ChefService, Ingredient} from '../../services/chef.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  ingredients: Array<Ingredient> = [];
  hasQuery = false;

  constructor(private chefService: ChefService) { }

  ngOnInit(): void {
  }

  sendData(event: any): void{
    const query: string = event.target.value;

    const matchSpaces: any = query.match(/\s*/);
    if (matchSpaces[0] === query){
      this.ingredients = [];
      return;
    }

    this.chefService.searchIngredients(query.trim()).subscribe(results => {
      this.ingredients = results;
      this.hasQuery = true;
      console.log(results);
    });
  }
}
