import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import swal from 'sweetalert2';
import * as _ from "lodash";
import { PSharedComponent } from '../shared/p-shared/p-shared.component';
import { DataUpload } from '../model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent extends PSharedComponent implements OnInit {


  groupData: any = [
    { id: '1', gname: 'สสจ.' },
    { id: '2', gname: 'สสอ.' },
    { id: '4', gname: 'รพสต.' },
    { id: '3', gname: 'โรงพยาบาล' },
  ];

  jobData: any;
  ampData: any;
  hospData: any;
  model = new DataUpload();
  hospDataClone: any;
  uploadData:any;
  catData:any;
  ngOnInit() {
    this.updateId = 0;
    this._pDataService.apiData(1)
      .subscribe(res => this.jobData = res, err => console.log(err), () => {
        // console.log(this.jobData);

      });

          this._pDataService.apiData(2)
      .subscribe(res => this.uploadData = res, err => console.log(err), () => {
        // console.log(this.jobData);

      });

    this._pDataService.apiData(3)
      .subscribe(res => this.ampData = res, err => console.log(err), () => {
        // console.log(this.jobData);

      });

    this._pDataService.apiData(4)
      .subscribe(res => this.hospData = res, err => console.log(err), () => {
        // console.log(this.hospData);
        this.hospDataClone = _.clone(this.hospData);
      });

          this._pDataService.apiData(5)
      .subscribe(res => this.catData = res, err => console.log(err), () => {
        // console.log(this.hospData);
        this.hospDataClone = _.clone(this.hospData);
      });
  }

  swData: any;
  getsw(ev) {
    // console.log(ev.target.value);
    let id = ev.target.value;
    this.swData = _.filter(this.hospDataClone, function (o) {
      if (o['groupcode'] == id) { return o; }
    });

    // console.log(this.swData);

  }

  getswct(ev, id) {
    // console.log(ev.target.value);
    let amp = ev.target.value;
    console.log(id);
    
    this.swData = _.filter(this.hospDataClone, function (o) {
      if (o['groupcode'] == id && o['ampcode'] == amp) { return o; }
    });
  }





  msgs: Message[];

  uploadedFilesDoc: any[] = [];
  uploadedFilesImg: any[] = [];
  onUploadDoc(event) {

    let index = this.findSelectedIndexDoc();
    this.uploadedFilesDoc.push(JSON.parse(event.xhr.response));
    // console.log(this.uploadedFilesDoc);

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  onUploadImg(event) {
    let index = this.findSelectedIndexImg();
    this.uploadedFilesImg.push(JSON.parse(event.xhr.response));
    // console.log(this.uploadedFilesImg);
    // console.log(this.uploadedFilesImg.length);

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }


  findSelectedIndexDoc(): number {
    return this.uploadedFilesDoc.indexOf(this.uploadedFilesDoc);
  }

  findSelectedIndexImg(): number {
    return this.uploadedFilesImg.indexOf(this.uploadedFilesImg);
  }




  docUrl: string = "http://164.115.22.73/khealth/api/upload-doc.php";
  docAccept: string = ".xlsx,.xls,.doc, .docx,.ppt,.pptx,.txt,.pdf";
  docType: string = "doc";
  docfolderUrl: string = "http://164.115.22.73/khealth/api/doc/doc_";
  dcoSt: number = 1;

  imgUrl: string = "http://164.115.22.73/khealth/api/upload-img.php";
  imgAccept: string = "image/*";
  imgType: string = "img";
  imgFolder: string = "http://164.115.22.73/khealth/api/img/img_";
  imgSt: number = 2;

  maxFileSize: string = "128000000";



  filesImg: any;

  deleteImg(imgType, filsData, index) {
    console.log(index);

    this._delfilesService.delfiles(imgType, filsData)
      .subscribe(res => this.filesImg = res, err => console.log(err), () => {
        alert();
        // this.uploadedFilesImg = this.uploadedFilesImg.filter((val, i) => i != index);
        // console.log(this.uploadedFilesImg);
      });
  }

  filesDoc: any;

  deleteDoc(imgType, filsData, index) {
    console.log(index);

    this._delfilesService.delfiles(imgType, filsData)
      .subscribe(res => this.filesDoc = res, err => console.log(err), () => {
        alert();
        // this.uploadedFilesImg = this.uploadedFilesImg.filter((val, i) => i != index);
        // console.log(this.uploadedFilesImg);
      });
  }

  save() {
    // console.log(this.model);
    if (this.uploadedFilesImg.length) {
      this.model.file_img = JSON.stringify(this.uploadedFilesImg);
    }
    if (this.uploadedFilesDoc.length) {
      this.model.file_doc = JSON.stringify(this.uploadedFilesDoc);
    }
  // console.log(this.model);
  
    this.model.user = '1111111111111';
    this.model.fullname = 'นายพิพัฒน์ พรมพวง';
    this.model.id_position = '00000';
    this.model.st = 1;
    this.model.date_add = this._pDataService.dateNows();
    this.pd = this.model;

    this._pDataService.addData('data_upload', 'id', this.updateId, this.pd)
      .subscribe(res => this.addmodel = res, err => console.log(err), () => {
        // console.log(this.addmodel);
        
        swal(
          ' ระบบทำการบันทึก',
          'ข้อมูลเรียบร้อยแล้ว',
          'success'
        );

        this.reloadPage();
      });
  }

  reloadPage() {
    this.model = new DataUpload();
    this.uploadedFilesDoc = [];
    this.uploadedFilesImg = [];
    this.ngOnInit();
  }




}
