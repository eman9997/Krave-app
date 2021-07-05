import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  sideBarOpened= false;
  // temporary list just to keep going on the UI
  ingrediantList:string[]=[];

  constructor() {

  }

  ngOnInit(): void {
  }


}
