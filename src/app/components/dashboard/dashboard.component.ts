import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MovieResponse, Movies } from 'src/app/model/popular-movie-response';
import { TV } from 'src/app/model/tvresponse';
import { DataShareService } from 'src/app/services/data-share.service';
import { MovieDBAPIService } from 'src/app/services/movie-dbapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isPopular = true;
  isPopularTV = true;
  topWidth = '3';
  topWidthTV = '3';
  constructor(private service: MovieDBAPIService, private dataShareService: DataShareService) { }
  currentPage = 1;
  moviesResponse: MovieResponse;
  popularMovies: Movies[];
  upcomingMovies: Movies[];
  popularTV: TV[];
  topRatedTV: TV[];

  ngOnInit(): void {
    this.listPopularMovies(this.currentPage);
    this.listUpcomingMovies(this.currentPage);
    this.listTopRatedTV(this.currentPage);
    this.listPopularTV(this.currentPage);
  }

  listTopRatedTV(currentPage: number) {
    this.dataShareService.getTopRatedTV(currentPage).then((res) => {
      this.topRatedTV = res;
    }).catch((err) => {
      this.service.getTopRatedTV(currentPage).subscribe((res) => {
        this.topRatedTV = res.results;
        this.dataShareService.setTopRatedTVMap(currentPage, res.results);
        this.dataShareService.setTotalTopRatedTV(res.total_results);
      });
    });
  }

  listPopularTV(currentPage: number) {
    this.dataShareService.getPopularTV(currentPage).then((res) => {
      this.popularTV = res;
    }).catch((err) => {
      this.service.getPopularTV(currentPage).subscribe((res) => {
        this.popularTV = res.results;
        this.dataShareService.setPopularTVMap(currentPage, res.results);
        this.dataShareService.setTotalPopularMovies(res.total_results);
      });
    });
  }

  listUpcomingMovies(currentPage: number) {
    this.dataShareService.getUpcomingMovies(currentPage).then((res) => {
      this.upcomingMovies = res;
    }).catch((err) => {
      this.service.getUpcomingMovies(currentPage).subscribe((res) => {
        this.upcomingMovies = res.results;
        this.dataShareService.setUpcomingMoviesMap(currentPage, res.results);
        this.dataShareService.setTotalUpcomingMovies(res.total_results);
      });
    });
  }

  listPopularMovies(currentPage: number) {
    this.dataShareService.getPopularMovies(currentPage).then((res) => {
      this.popularMovies = res;
    }).catch((err) => {
      this.service.getPopularMovies(currentPage).subscribe((res) => {
        this.popularMovies = res.results;
        this.dataShareService.setPopularMovieMap(currentPage, res.results);
        this.dataShareService.setTotalPopularMovies(res.total_results);
      });
    });
  }

  viewToggle(event: MatButtonToggleChange) {
    this.isPopular = (event.value === 'popular');
  }
 

  viewToggleTV(event: MatButtonToggleChange) {
    this.isPopularTV = (event.value === 'popular');
  }
}
