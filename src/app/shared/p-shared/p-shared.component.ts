import { delfilesService } from './../service/delfiles.service';
import { PDataService } from './../service/p-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Location } from '@angular/common';
import { Message } from 'primeng/primeng';
@Component({
  selector: 'app-p-shared',
  templateUrl: './p-shared.component.html',
  styleUrls: ['./p-shared.component.css']
})
export class PSharedComponent implements OnInit {

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _router: Router,
    public _pDataService: PDataService,
    public _cookieService: CookieService,
    public _location: Location,
    public _delfilesService:delfilesService
  ) { }
  public msgs: Message[];
  models: any = [];
  models1: any = [];
  models2: any = [];
  pd: any = [];
  updateId: number;
  addmodel: any = [];
  del: any = [];

  ngOnInit() {
  }

}
