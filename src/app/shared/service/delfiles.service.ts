import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class delfilesService {
    opts: RequestOptions;

    private headers: Headers;
    constructor(private _http: Http) { }


    delfiles(nameFolder: any, nameFiles: any): Observable<any> {
        let url = `http://164.115.22.73/khealth/api/deletefile.php/delFiles/${nameFolder}/${nameFiles}`;
        console.log(url);
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


}
