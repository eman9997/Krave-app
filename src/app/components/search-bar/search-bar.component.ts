import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChefService, Ingredient } from '../../services/chef.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  myControl = new FormControl();
  allIngredients: Array<Ingredient> = [];
  autoCompleteList: Array<Ingredient> = [];

  @ViewChild('autocompleteInput') autocompleteInput: ElementRef | undefined;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelectedOption = new EventEmitter();

  constructor(
      public chefService: ChefService
  ) { }

  ngOnInit(): void {
    // when user types something in input, the value changes will come through this
    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    });
  }

  private autoCompleteExpenseList(input: string): void {
    const categoryList = this.filterCategoryList(input);
    this.autoCompleteList = categoryList;
  }

  // this is where filtering the data happens according to you typed value
  filterCategoryList(val: string | null): any[] | Ingredient[] {
    const categoryList = [];
    if (typeof val !== 'string') {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allIngredients.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) !== -1)
        : this.allIngredients;
  }

  // after you clicked an autosuggest option, this function will show the field you want to show in input
  displayFn(ingredient: Ingredient): string {
    const k = ingredient ? ingredient.name : ingredient;
    return k;
  }

  filterIngredientList(event: { source: { value: any; }; }): void {
    const ingredients = event.source.value;
    if (!ingredients) {
      this.chefService.searchOption = [];
    }
    else {

      // @ts-ignore
      this.chefService.searchOption.push(ingredients);
      this.onSelectedOption.emit(this.chefService.searchOption);
    }
    this.focusOnPlaceInput();
  }

  removeOption(option: any): void {

    let index: number;
    // @ts-ignore
    index = this.chefService.searchOption.indexOf(option);
    if (index >= 0) {
      this.chefService.searchOption.splice(index, 1);
    }
    this.focusOnPlaceInput();

    this.onSelectedOption.emit(this.chefService.searchOption);
  }

  // focus the input field and remove any unwanted text.
  private focusOnPlaceInput(): void {
    // @ts-ignore
    this.autocompleteInput.nativeElement.focus();
    // @ts-ignore
    this.autocompleteInput.nativeElement.value = '';
  }


}
