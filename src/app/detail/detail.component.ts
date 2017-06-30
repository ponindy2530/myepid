import { PSharedComponent } from './../shared/p-shared/p-shared.component';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import * as _ from "lodash";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends PSharedComponent implements OnInit {
  uploadData: any;
  catData: any;

  // _.reverse(array)
  ngOnInit() {
    this._pDataService.apiData(2)
      .subscribe(res => this.uploadData = _.reverse(res), err => console.log(err), () => {

      });

    this._pDataService.apiData(5)
      .subscribe(res => this.catData = res, err => console.log(err), () => {

      });
  }

  docfolderUrl: string = "http://164.115.22.73/khealth/api/doc/doc_";
  imgFolder: string = "http://164.115.22.73/khealth/api/img/img_";
  docData: any;
  imgData: any;
  openPage: number = -1;
  tb:string = "column";
  smtitle:string;
  getOpen(ev, i) {
    this.openPage = i;
    this.tb = "column is-7";
    this.smtitle = ev.title;
    this.docData = JSON.parse(ev.file_doc);
    this.imgData = JSON.parse(ev.file_img);
  }

  catid: number;
  catTitle: string;
  getcatData(ev) {
    this.tb = "column";
    this.openPage = -1;
    this.catid = ev.catid;
    this.catTitle = ev.catname;
  }



}
