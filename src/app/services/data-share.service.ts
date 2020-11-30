import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Movies } from '../model/popular-movie-response';
import { TV } from '../model/tvresponse';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private totalPopularMovies: number;
  private totalUpcomingMovies: number;
  private totalTopRatedTV: number;
  private totalPopularTV: number;
  private popularMoviesMap: Map<number, Movies[]>;
  private upcomingMoviesMap: Map<number, Movies[]>;
  private popularTVMap: Map<number, TV[]>;
  private topRatedTVMap: Map<number, TV[]>;
  private genres: any[];

  constructor() {
    this.topRatedTVMap = new Map();
    this.popularMoviesMap = new Map();
    this.upcomingMoviesMap = new Map();
    this.popularTVMap = new Map();
  }

  setTotalPopularTV(count: number) {
    this.totalPopularTV = count;
  }

  setTotalTopRatedTV(count: number) {
    this.totalTopRatedTV = count;
  }

  getPopularTVTotal(): Promise<number> {
    return new Promise((resolve, reject) => {
      if (this.totalPopularTV === undefined || this.totalPopularTV === null) {
        reject('No Data found');
      } else {
        resolve(this.totalPopularTV);
      }
    });
  }

  getTopRatedTVTotal(): Promise<number> {
    return new Promise((resolve, reject) => {
      if (this.totalTopRatedTV === undefined || this.totalTopRatedTV === null) {
        reject('No Data found');
      } else {
        resolve(this.totalTopRatedTV);
      }
    });
  }

  setTotalUpcomingMovies(count: number) {
    this.totalUpcomingMovies = count;
  }

  setGenres(data: any[]) {
    this.genres = data;
  }

  getGenres(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (this.genres === undefined || this.genres === null) {
        reject('No data found');
      } else {
        resolve(this.genres);
      }
    });
  }

  getTotalUpcomingMovies(): Promise<number> {
    return new Promise((resolve, reject) => {
      if (this.totalUpcomingMovies === undefined || this.totalUpcomingMovies === 0) {
        reject('No data');
      } else {
        resolve(this.totalUpcomingMovies);
      }
    });
  }

  setTotalPopularMovies(count: number) {
    this.totalPopularMovies = count;
  }

  getTotalPopularMovies(): Promise<number> {
    return new Promise((resolve, reject) => {
      if (this.totalPopularMovies === undefined || this.totalPopularMovies === 0) {
        reject('No data');
      } else {
        resolve(this.totalPopularMovies);
      }
    });
  }

  setPopularTVMap(id: number, value: TV[]) {
    this.popularTVMap.set(id, value);
  }

  getPopularTV(pageNo: number): Promise<TV[]> {
    return new Promise((resolve, reject) => {
      if (this.popularTVMap.has(pageNo)) {
        resolve(this.popularTVMap.get(pageNo));
      } else {
        reject('No data found');
      }
    });
  }

  getTopRatedTV(pageNo: number): Promise<TV[]> {
    return new Promise((resolve, reject) => {
      if (this.topRatedTVMap.has(pageNo)) {
        resolve(this.topRatedTVMap.get(pageNo));
      } else {
        reject('No data found');
      }
    });
  }



  setPopularMovieMap(id: number, value: Movies[]) {
    this.popularMoviesMap.set(id, value);
  }

  setUpcomingTVMap(id: number, value: TV[]) {
    this.popularTVMap.set(id, value);
  }

  setTopRatedTVMap(id: number, value: TV[]) {
    this.topRatedTVMap.set(id, value);
  }

  getPopularMovies(id: number): Promise<Movies[]> {
    return new Promise((resolve, reject) => {
      if (this.popularMoviesMap.has(id)) {
        resolve(this.popularMoviesMap.get(id));
      } else {
        reject('No data found');
      }
  });
  }

  getUpcomingMovies(id: number): Promise<Movies[]> {
    return new Promise((resolve, reject) => {
      if (this.upcomingMoviesMap.has(id)) {
        resolve(this.upcomingMoviesMap.get(id));
      } else {
        reject('No data found');
      }
    });
  }


  setUpcomingMoviesMap(currentPage: number, movies: Movies[]) {
    this.upcomingMoviesMap.set(currentPage, movies);
  }
}
