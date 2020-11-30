import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Movies } from 'src/app/model/popular-movie-response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movieData: Movies;
  @Input() topWidth: string;
  imageUrl = environment.imageBaseUrl;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.imageUrl = this.imageUrl + this.movieData.backdrop_path;
  }

  cardClicked() {
    this.router.navigateByUrl('/movie/details/' + this.movieData.id);
  }

}
