import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieDetailsComponent } from './components/Movies/movie-details/movie-details.component';
import { PopularMovieComponent } from './components/Movies/popular-movie/popular-movie.component';
import { UpcomingMovieComponent } from './components/Movies/upcoming-movie/upcoming-movie.component';
import { PopularTVComponent } from './components/TV/popular-tv/popular-tv.component';
import { TopRatedTVComponent } from './components/TV/top-rated-tv/top-rated-tv.component';
import { TVDetailsComponent } from './components/TV/tvdetails/tvdetails.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboards',
    pathMatch: 'full'
  },
  {
    path: 'dashboards',
    component: DashboardComponent
  },
  {
    path: 'movie',
    children: [
      {
        path: 'popular',
        component: PopularMovieComponent
      },
      {
        path: 'upcoming',
        component: UpcomingMovieComponent
      },
      {
        path: 'details/:id',
        component: MovieDetailsComponent
      }
    ]
  },
  {
    path: 'tv',
    children: [
      {
        path: 'popular',
        component: PopularTVComponent
      },
      {
        path: 'top-rated',
        component: TopRatedTVComponent
      },
      {
        path: 'details/:id',
        component: TVDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
