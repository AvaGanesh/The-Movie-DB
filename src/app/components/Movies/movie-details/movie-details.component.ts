import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/model/popular-movie-response';
import { MovieDBAPIService } from 'src/app/services/movie-dbapi.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  genres: string;
  movieDetails: Movies;
  constructor(private service: MovieDBAPIService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.genres = '';
    this.route.params.subscribe(params => {
      this.service.getMovieDetails(parseInt(params.id, 10)).subscribe((res) => {
         this.movieDetails = res;
         this.movieDetails.poster_path = environment.coverImage + this.movieDetails.poster_path;

         const genreDetails: string[] = [];
         this.movieDetails.genres.forEach((genre) => {
           this.genres += genre.name + ', ';
         });
         this.genres = this.genres.substring(0, this.genres.length - 2);
      });
    });
  }

  getStyle() {
    const styles = {
      background: this.movieDetails.poster_path,
      width: '100%',
      height: '100%'
    };
    console.log(styles);
    return styles;
  }

}
