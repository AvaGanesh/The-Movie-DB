import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TV } from 'src/app/model/tvresponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tvcard',
  templateUrl: './tvcard.component.html',
  styleUrls: ['./tvcard.component.scss']
})
export class TVCardComponent implements OnInit {

  @Input() tvData: TV;
  @Input() topWidth: string;

  imageUrl = environment.imageBaseUrl;
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.imageUrl = this.imageUrl + this.tvData.backdrop_path;
  }

  goToTVDetails() {
    this.router.navigateByUrl('/tv/details/' + this.tvData.id);
  }

}
