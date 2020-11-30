import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVDetail } from 'src/app/model/tvdetails';
import { TV } from 'src/app/model/tvresponse';
import { MovieDBAPIService } from 'src/app/services/movie-dbapi.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TVDetailsComponent implements OnInit {
  tvDetails: TVDetail;
  genres: string;
  constructor(private service: MovieDBAPIService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.genres = '';
    this.route.params.subscribe(params => {
      this.service.getTVDetails(parseInt(params.id, 10)).subscribe((res) => {
         this.tvDetails = res;
         this.tvDetails.poster_path = environment.coverImage + this.tvDetails.poster_path;

         this.tvDetails.genres.forEach((genre) => {
           this.genres += genre.name + ', ';
         });
         this.genres = this.genres.substring(0, this.genres.length - 2);
      });
    });
  }

}
