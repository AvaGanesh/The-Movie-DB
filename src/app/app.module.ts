import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PopularMovieComponent } from './components/Movies/popular-movie/popular-movie.component';
import { MovieCardComponent } from './components/Movies/movie-card/movie-card.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpcomingMovieComponent } from './components/Movies/upcoming-movie/upcoming-movie.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TVCardComponent } from './components/TV/tvcard/tvcard.component';
import { PopularTVComponent } from './components/TV/popular-tv/popular-tv.component';
import { TopRatedTVComponent } from './components/TV/top-rated-tv/top-rated-tv.component';
import { MovieDetailsComponent } from './components/Movies/movie-details/movie-details.component';
import { FilterComponent } from './components/filter/filter.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GenreFilterPipe } from './Pipes/genre-filter.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TVDetailsComponent } from './components/TV/tvdetails/tvdetails.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PopularMovieComponent,
    MovieCardComponent,
    DashboardComponent,
    UpcomingMovieComponent,
    TVCardComponent,
    PopularTVComponent,
    TopRatedTVComponent,
    MovieDetailsComponent,
    FilterComponent,
    GenreFilterPipe,
    TVDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDividerModule,
    MatToolbarModule,
    MatChipsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
