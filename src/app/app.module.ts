import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {NavbarComponent} from './partial/navbar/navbar.component';
import {LoaderComponent} from './partial/loader/loader.component';

import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {ChefService} from './services/chef.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule, MatInputModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatFormFieldModule
    ],
    providers: [ChefService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
