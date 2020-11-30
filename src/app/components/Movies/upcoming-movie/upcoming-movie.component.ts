import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieResponse, Movies } from 'src/app/model/popular-movie-response';
import { DataShareService } from 'src/app/services/data-share.service';
import { MovieDBAPIService } from 'src/app/services/movie-dbapi.service';

@Component({
  selector: 'app-upcoming-movie',
  templateUrl: './upcoming-movie.component.html',
  styleUrls: ['./upcoming-movie.component.scss']
})
export class UpcomingMovieComponent implements OnInit {

  currentPage = 1;
  moviesResponse: MovieResponse;
  movies: Movies[];
  totalMovies: number;
  appliedFilters: number[];
  pageSize = 20;
  topWidth = 3;

  constructor(private service: MovieDBAPIService, private dataShareService: DataShareService) { }

  async ngOnInit(): Promise<void> {
    this.appliedFilters = [];
    await this.listUpcomingMovies(this.currentPage);
  }

  async listUpcomingMovies(currentPage: number) {
    this.dataShareService.getTotalUpcomingMovies().then((res) => {
      this.totalMovies = res;
      this.dataShareService.getUpcomingMovies(currentPage).then((data) => {
        this.movies = data;
      }).catch((err) => {
        this.getServerData(currentPage);
      });
    }).catch((err) => {
      console.error(err);
      this.getServerData(currentPage);
    });
  }

  getServerData(currentPage: number) {
    this.service.getUpcomingMovies(currentPage).subscribe((res) => {
      this.movies = res.results;
      this.totalMovies = res.total_results;
      this.dataShareService.setTotalUpcomingMovies(res.total_results);
      this.dataShareService.setUpcomingMoviesMap(currentPage, res.results);
    });
  }


  pageChange(event: PageEvent) {
    console.log(event.pageIndex);
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    // this.currentPage = event.pageIndex;
    this.listUpcomingMovies(this.currentPage);
  }

  applyFilter(data: number[]) {
    this.appliedFilters = [...data];
  }
}
