import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Genre } from 'src/app/model/genre-response';
import { DataShareService } from 'src/app/services/data-share.service';
import { MovieDBAPIService } from 'src/app/services/movie-dbapi.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  genres: Genre[];
  chipData = [];
  selectedGenres: number[];
  @Output() filterApplied = new EventEmitter();
  constructor(private service: MovieDBAPIService, private dataShareSevice: DataShareService) { }

  ngOnInit(): void {
    this.selectedGenres = [];
    this.dataShareSevice.getGenres().then((res) => {
      this.genres = [...res];
      this.processData();
    }).catch((err) => {
      this.service.getMovieGenres().subscribe((res) => {
        this.dataShareSevice.setGenres(res.genres);
        this.genres = res.genres;
        this.processData();
      });
    });
  }

  processData() {
    this.genres.forEach((genre) => {
      this.chipData.push({
        id: genre.id,
        name: genre.name,
        isSelected: false
      });
    });
  }

  chipChanged(genre: any) {
    // console.log(event.selected);
    if (!genre.isSelected) {
      this.selectedGenres.push(genre.id);
    } else {
      const genreIndex = this.selectedGenres.indexOf(genre.id);
      (genreIndex >= 0) ? this.selectedGenres.splice(genreIndex, 1) : console.log('Not found');
    }
    const index = this.chipData.indexOf(genre);
    if (index >= 0) {
      this.chipData.splice(index, 1);
      this.chipData.push({
        id: genre.id,
        name: genre.name,
        isSelected: !genre.isSelected
      });
    }
    // console.log(this.selectedGenres);
    this.filterApplied.emit(this.selectedGenres);
  }


}
