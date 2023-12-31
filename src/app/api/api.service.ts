import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable } from 'rxjs';

export enum RequestMethod {
  Get = 'GET',
  Head = 'HEAD',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
  Options = 'OPTIONS',
  Patch = 'PATCH'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _api_url = 'http://localhost:8080/reddit';

  // private _register_url = this._api_url + 'users/';
  // private _login_url = this._api_url + '/users/login';
  // private _whoami_url = this._api_url + '/users/whoami';

  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    'Access-Control-Allow-Origin': '*'
    
  });

  constructor(
    private http: HttpClient
    ) 
    {

    }

  get(path: string, args?: any): Observable<any> {
    const options = {
      headers: this.headers
    };

    if (args) {
      console.log("args;"+ args)
      // options['params'] = this.serialize(args);
    }

    return this.http.get(this._api_url + path, options);
      // .pipe(catchError(this.checkError.bind(this)));
  }

  post(path: string, body: any, customHeaders?: HttpHeaders): Observable<any> {
    return this.request(path, body, RequestMethod.Post, customHeaders);
  }

  put(path: string, body: any): Observable<any> {
    return this.request(path, body, RequestMethod.Put);
  }

  delete(path: string, body?: any): Observable<any> {
    return this.request(path, body, RequestMethod.Delete);
  }

  private request(path: string, body: any, method: RequestMethod, customHeaders?: HttpHeaders): Observable<any> {
    const req = new HttpRequest(method, this._api_url + path, body, {
      headers: customHeaders || this.headers,
    });

    return this.http.request(req).pipe(filter(response => response instanceof HttpResponse))
      // .pipe(map((response: HttpResponse<any>) => response.body))
      .pipe(catchError(error => this.checkError(error)));
  }

  private checkError(error: any): any {
    throw error;
  }

  private serialize(obj: any): HttpParams {
    let params = new HttpParams();
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && !this.looseInvalid(obj[key])) {
        params = params.set(key, obj[key]);
      }
    }
  
    return params;
  }

  private looseInvalid(a: string | number): boolean {
    return a === '' || a === null || a === undefined;
  }
}