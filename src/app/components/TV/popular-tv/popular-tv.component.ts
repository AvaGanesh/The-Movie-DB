import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TV } from 'src/app/model/tvresponse';
import { DataShareService } from 'src/app/services/data-share.service';
import { MovieDBAPIService } from 'src/app/services/movie-dbapi.service';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.component.html',
  styleUrls: ['./popular-tv.component.scss']
})
export class PopularTVComponent implements OnInit {

  tv: TV[];
  currentPage = 1;
  pageSize = 20;
  totalSize: number;
  appliedFilter: number[];
  topWidth = '3';
  constructor(private service: MovieDBAPIService, private dataShareService: DataShareService) { }

  async ngOnInit(): Promise<void> {
    this.appliedFilter = [];
    await this.listPopularTV(this.currentPage);
  }

  async listPopularTV(pageNo: number) {
    await this.dataShareService.getPopularTVTotal().then(async (total) => {
      this.totalSize = total;
      await this.dataShareService.getPopularTV(pageNo).then((res) => {
        this.tv = res;
      }).catch((err) => {
        console.error(err);
        this.getServerData(pageNo);
      });
    }).catch((err) => {
      console.error(err);
      this.getServerData(pageNo);
    });
  }


  getServerData(pageNo: number) {
    this.service.getPopularTV(pageNo).subscribe((res) => {
      this.totalSize = res.total_results;
      this.tv = res.results;
      this.dataShareService.setTotalPopularTV(res.total_results);
      this.dataShareService.setPopularTVMap(pageNo, res.results);
    });
  }


  pageChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.listPopularTV(this.currentPage);
  }

  applyFilter(data: number[]) {
    this.appliedFilter = [...data];
  }

}
