import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieResponse, Movies } from 'src/app/model/popular-movie-response';
import { DataShareService } from 'src/app/services/data-share.service';
import { MovieDBAPIService } from 'src/app/services/movie-dbapi.service';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.scss']
})
export class PopularMovieComponent implements OnInit {

  constructor(private service: MovieDBAPIService,
              private dataShareService: DataShareService) { }
  currentPage = 1;
  totalSize: number;
  appliedFilters: number[];
  pageSize = 20;
  topWidth = 3;
  moviesResponse: MovieResponse;
  movies: Movies[];
  totalMovies: number;

  ngOnInit(): void {
    this.appliedFilters = [];
    this.listPopularMovies(this.currentPage);
  }

  listPopularMovies(currentPage: number) {
    this.dataShareService.getTotalPopularMovies().then((res) => {
      this.totalMovies = res;
      this.totalSize = res;
      this.dataShareService.getPopularMovies(currentPage).then((data) => {
        this.movies = data;
      }).catch((err) => {
        // console.error(err);
        this.getServerData(currentPage);
      });
    }).catch((err) => {
      this.getServerData(currentPage);
    });
  }

  getServerData(currentPage: number) {
    this.service.getPopularMovies(currentPage).subscribe((res) => {
      this.totalMovies = res.total_results;
      this.totalSize = res.total_results;
      this.movies = res.results;
      this.dataShareService.setTotalPopularMovies(res.total_results);
      this.dataShareService.setPopularMovieMap(currentPage, res.results);
    });
  }

  pageChange(event: PageEvent) {
    // console.log(event.pageIndex);
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    // this.currentPage = event.pageIndex;
    this.listPopularMovies(this.currentPage);
  }

  applyFilter(data: number[]) {
    // console.log(...data);
    this.appliedFilters = [...data];
  }
}
