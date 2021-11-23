import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChefService, Ingredient } from '../../services/chef.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  myControl = new FormControl();
  autoCompleteList: Array<Ingredient> = [];

  @ViewChild('autocompleteInput') autocompleteInput: ElementRef | undefined;
  @Output() selectedOption = new EventEmitter();

  constructor(
      public chefService: ChefService
  ) { }

  ngOnInit(): void {
    // when user types something in input, the value changes will come through this
    this.myControl.valueChanges.subscribe(userInput => {
      // tslint:disable-next-line:triple-equals
      if (typeof userInput != 'string') {
        this.autoCompleteList = [];
        return;
      }
      this.autoCompleteIngredientList(userInput);
    });
  }


  private autoCompleteIngredientList(input: string): void{
    if (input === '' || input === null) {
      this.autoCompleteList = [];
    }

    const query: string = input.trim();
    this.chefService.searchIngredients(query).subscribe(results => {
      this.autoCompleteList = results;
      console.log(results);
    });
  }

  selectIngredient(event: any): void {
    this.selectedOption.emit(event.source.value);
  }
}
