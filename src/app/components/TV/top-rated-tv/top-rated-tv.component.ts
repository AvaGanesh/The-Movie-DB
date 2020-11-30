import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TV } from 'src/app/model/tvresponse';
import { DataShareService } from 'src/app/services/data-share.service';
import { MovieDBAPIService } from 'src/app/services/movie-dbapi.service';

@Component({
  selector: 'app-top-rated-tv',
  templateUrl: './top-rated-tv.component.html',
  styleUrls: ['./top-rated-tv.component.scss']
})
export class TopRatedTVComponent implements OnInit {


  pageSize = 20;
  totalSize: number;
  tv: TV[];
  currentPage = 1;
  appliedFilters: number[];
  topWidth = '3';

  constructor(private service: MovieDBAPIService,
              private dataShareService: DataShareService) { }

  async ngOnInit(): Promise<void> {
    this.appliedFilters = [];
    this.listTopRatedTV(this.currentPage);
  }


  async listTopRatedTV(currentPage: number) {
    await this.dataShareService.getTopRatedTVTotal().then(async (total) => {
      this.totalSize = total;
      await this.dataShareService.getTopRatedTV(currentPage).then((res) => {
        this.tv = res;
      }).catch((err) => {
        this.getServerData(currentPage);
      });
    }).catch((err) => {
      this.getServerData(currentPage);
    });
  }


  getServerData(currentPage: number) {
    this.service.getTopRatedTV(currentPage).subscribe((res) => {
      this.totalSize = res.total_results;
      this.tv = res.results;
      this.dataShareService.setTotalTopRatedTV(res.total_results);
      this.dataShareService.setTopRatedTVMap(currentPage, res.results);
    });
  }

  pageChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.listTopRatedTV(this.currentPage);
  }

  applyFilters(data: number[]) {
    this.appliedFilters = [...data];
  }

}
