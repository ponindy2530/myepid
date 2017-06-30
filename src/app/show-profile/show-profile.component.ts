import { PSharedComponent } from './../shared/p-shared/p-shared.component';
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
import * as _ from "lodash";
@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent extends PSharedComponent implements OnChanges {

  @Input() profileItem: any;
  @Input() key:number;
  @Input() stitle:string;
  @Input() col:string;
  ngOnChanges(): void {
    // console.log(this.profileItem);
    this.getuploadData(this.profileItem,this.key);
  }
  docfolderUrl: string = "http://164.115.22.73/khealth/api/doc/doc_";
  imgFolder: string = "http://164.115.22.73/khealth/api/img/img_";

  uploadData: any[];
  cloneuploadData: any[];
  st1Data: any[];
  st2Data: any[];
  getuploadData(ev,key) {
    this._pDataService.apiData1(7, ev.id).subscribe(res => {
      this.uploadData = res,
        // console.log(this.uploadData);

        this.cloneuploadData = _.clone(this.uploadData);
      this.st1Data = _.filter(this.cloneuploadData, function (o: any) {
        if (o['st'] == key) { return o; }
      });
    });
  }

  pageOpen: number = -1;
  docData: any[];
  imgData: any[];
  hTitle: string;
  hDetail: string;
  hDate:string;
  itemData:any[];
  getfile(ev) {
    this.pageOpen = ev.id;
    this.hTitle = ev.title;
    this.hDetail = ev.detail;
    this.hDate = ev.date_update;
    if (ev.file_doc.length) {
      this.docData = JSON.parse(ev.file_doc);
    }
    if (ev.file_img.length) {
      this.imgData = JSON.parse(ev.file_img);
    }

  }

  esc() {
    this.pageOpen = -1;
  }


}
