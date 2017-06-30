import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class PDataService {
    opts: RequestOptions;

    Token: string = '12345678';
   conDb: string = 'db_myepid';

  url: string = "http://164.115.22.73/";
  // url: string = "http://127.0.0.1/"
  urlFd: string = "khealth/api/";
  urlph: string = "api-164.php";

    _api: string = `${this.url}${this.urlFd}${this.urlph}`;
    private headers: Headers;
    constructor(private _http: Http) { }

    addData(tbl: any, fd: any, param: any, pd: any): Observable<any> {
        let url = `${this._api}/addData/${this.Token}/${this.conDb}/${tbl}/${fd}/${param}`;
        let body = JSON.stringify(pd);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, { headers: headers })
            .map((response: Response) => response.json());
    }


    delData(tbl: any, fd: any, params: any): Observable<any> {
        let url = `${this._api}/delData/${this.Token}/${this.conDb}/${tbl}/${fd}/${params}`;
        return this.resjson(url);
    }

    apiData(apiKey: number) {
        let url = `${this._api}/apiData/${this.Token}/${this.conDb}/${apiKey}`;
        return this.resjson(url);
    }

    apiData1(apiKey: number, param1: any) {
        let url = `${this._api}/apiData1/${this.Token}/${this.conDb}/${apiKey}/${param1}`;
        return this.resjson(url);
    }

    apiData2(apiKey: number, param1: any, param2: any) {
        let url = `${this._api}/apiData2/${this.Token}/${this.conDb}/${apiKey}/${param1}/${param2}`;
        return this.resjson(url);
    }

    apiData3(apiKey: number, param1: any, param2: any, param3: any) {
        let url = `${this._api}/apiData3/${this.Token}/${this.conDb}/${apiKey}/${param1}/${param2}/${param3}`;
        return this.resjson(url);
    }

    apiData4(apiKey: number, param1: any, param2: any, param3: any, param4: any) {
        let url = `${this._api}/apiData4/${this.Token}/${this.conDb}/${apiKey}/${param1}/${param2}/${param3}/${param4}`;
        return this.resjson(url);
    }

    apiData5(apiKey: number, param1: any, param2: any, param3: any, param4: any, param5: any) {
        let url = `${this._api}/apiData5/${this.Token}/${this.conDb}/${apiKey}/${param1}/${param2}/${param3}/${param4}/${param5}`;
        return this.resjson(url);
    }

    apiData6(apiKey: number, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any) {
        let url = `${this._api}/apiData6/${this.Token}/${this.conDb}/${apiKey}/${param1}/${param2}/${param3}/${param4}/${param5}/${param6}`;
        return this.resjson(url);
    }

    resjson(url): Observable<any> {
        return this._http.get(url)
            .map((response: Response) => response.json())
            .catch(this.handleError)
    }

    private handleError(err: Response) {
        let details = { status: err.status, error: err.json() };
        return Observable.throw(details);
    }

    pmData(apiKey: number) {
        return new Promise((resolve, reject) => {
            let url = `${this._api}/apiData/${this.Token}/${this.conDb}/${apiKey}`;
            this._http.get(url)
                .map(res => res.json())
                .subscribe(data => {
                    resolve(data);
                }, error => {
                    reject(error);
                });
        })
    }

    //วันที่ปัจจุบัน
    dateNows() {
        const currentTime = new Date();
        const monthnow = ("0" + (currentTime.getMonth() + 1)).slice(-2);
        const dnow = ("0" + (currentTime.getDate())).slice(-2);
        const datenows = currentTime.getFullYear() + '-' + monthnow + '-' + dnow;
        return datenows;
    }

    //วันที่ปัจจุบันไทย
    dateYearTh() {
        const currentTime = new Date();
        const datenows = currentTime.getFullYear() + 543;
        return datenows;
    }
    datenowsEn: any;
    dateYearEn() {
        const currentTime = new Date();
        const monthnow = ("0" + (currentTime.getMonth() + 1)).slice(-2);
        if (monthnow == '10' || monthnow == '11' || monthnow == '12') {
            this.datenowsEn = currentTime.getFullYear();
        } else {
            this.datenowsEn = currentTime.getFullYear() - 1;
        }
        // const datenows = currentTime.getFullYear();
        return this.datenowsEn;
    }

    delfiles(nameFolder: any, nameFiles: any): Observable<any> {
        let url = `http://164.115.22.73/khealth/api/deletefile.php/delFiles/${nameFolder}/${nameFiles}`;
        console.log(url);
        return this.resjson(url);
    }

}
