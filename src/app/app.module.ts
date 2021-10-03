import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NavbarComponent } from './partial/navbar/navbar.component';
import { LoaderComponent } from './partial/loader/loader.component';

import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ChefService } from './services/chef.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FavoritesComponent,
    NavbarComponent,
    LoaderComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ChefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
