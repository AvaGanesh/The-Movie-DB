import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreResponse } from '../model/genre-response';
import { MovieResponse, Movies } from '../model/popular-movie-response';
import { TVDetail } from '../model/tvdetails';
import { TV, TVResponse } from '../model/tvresponse';

@Injectable({
  providedIn: 'root'
})
export class MovieDBAPIService {

  constructor(private http: HttpClient) { }

  getMovieGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`${environment.baseUrl}/3/genre/movie/list?api_key=${environment.v3key}&language=en-US`);
  }

  getPopularMovies(pageNo: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>
    (`${environment.baseUrl}/3/movie/popular?api_key=${environment.v3key}&language=en-US&page=${pageNo}`);
  }

  getTopRatedMovies(pageNo: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>
    (`${environment.baseUrl}/3/movie/top_rated?api_key=${environment.v3key}&language=en-US&page=${pageNo}`);
  }


  getUpcomingMovies(pageNo: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>
    (`${environment.baseUrl}/3/movie/upcoming?api_key=${environment.v3key}&language=en-US&page=${pageNo}`);
  }

  getPopularTV(pageNo: number): Observable<TVResponse> {
    return this.http.get<TVResponse>(`${environment.baseUrl}/3/tv/popular?api_key=${environment.v3key}&language=en-US&page=${pageNo}`);
  }

  getTopRatedTV(pageNo: number): Observable<TVResponse> {
    return this.http.get<TVResponse>(`${environment.baseUrl}/3/tv/top_rated?api_key=${environment.v3key}&language=en-US&page=${pageNo}`);
  }

  getLatestTV(pageNo: number): Observable<TVResponse> {
    return this.http.get<TVResponse>(`${environment.baseUrl}/3/tv/latest?api_key=${environment.v3key}&language=en-US&page=${pageNo}`);
  }


  getMovieDetails(movieId: number): Observable<Movies> {
    return this.http.get<Movies>(`${environment.baseUrl}/3/movie/${movieId}?api_key=${environment.v3key}&language=en-US`);
  }

  getTVDetails(tvId: number): Observable<TVDetail> {
    return this.http.get<TVDetail>(`${environment.baseUrl}/3/tv/${tvId}?api_key=${environment.v3key}&language=en-US`);
  }
}
