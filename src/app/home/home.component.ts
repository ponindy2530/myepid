import { PSharedComponent } from './../shared/p-shared/p-shared.component';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import * as _ from "lodash";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends PSharedComponent implements OnInit {

  jobData: any[];
  clonejobData: any[];
  ngOnInit() {
    this._pDataService.apiData(6).subscribe(res => {
      this.jobData = res,
        this.clonejobData = _.clone(this.jobData);
    });
  }
  profile: boolean = false;
  profileItem: any;
  clickjobData(ev) {
    let id = ev.id;
    this.jobData = _.filter(this.clonejobData, function (o: any) {
      if (o['id'] == id) { return o; }
    });
    this.profile = true;
    this.profileItem = ev;
  }

}
