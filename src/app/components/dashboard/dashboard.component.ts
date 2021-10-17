import { Component, OnInit } from '@angular/core';
import { ChefService, Ingredient } from '../../services/chef.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  sideBarOpened = false;
  // temporary list just to keep going on the UI
  ingredientList: string[] = [];
  ingredients: Ingredient[] | undefined = [];

  constructor(private chefService: ChefService) {
  }

  ngOnInit(): void {
  }

  onSelectedFilter($event: any): void {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList(): void {
    if (this.chefService.searchOption.length > 0) {
      this.ingredients = this.chefService.filteredListOptions();
    }
    else {
      this.ingredients = this.chefService.ingredientsData;
    }

  }
}
