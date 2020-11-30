import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDBAPIService } from './services/movie-dbapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MovieDatabase';

  constructor(private router: Router) {
  }

  ngOnInit() {
    
  }

  redirect(path) {
    this.router.navigateByUrl(path);
  }
}
