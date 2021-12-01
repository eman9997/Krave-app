import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  sideBarOpened = false;
  fridge: Ingredient[] = [];

  ngOnInit(): void {
  }

  onSelectedIngredient($event: Ingredient): void {
    this.addIngredientToFridge($event);
  }

  addIngredientToFridge(ingredient: Ingredient): void {
    console.log(`Adding ${ingredient.name} to fridge`);
  }
}
