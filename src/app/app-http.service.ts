import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

interface Options {
    limit?:number;
}

@Injectable()
export class AppHttpService {
  private url: string;

  constructor(private http: Http) { }

  builder (resource: string) {
      this.url = 'http://localhost:8000/api/' + resource;
      return this;
    }

    view (id: number) {
      return this.http.get(this.url + '/' + id)
        .toPromise()
        .then((res) => {
          return res.json() || {};
        });
    }

    update (id: number, data: Object) {
      return this.http.put(this.url + '/' + id, data)
        .toPromise()
        .then((res) => {
          return res.json() || {};
        });
    }

    insert (data: Object) {
      return this.http.post(this.url, data)
        .toPromise()
        .then((res) => {
          return res.json() || {};
        });
    }

    delete (id: number) {
      return this.http.delete(this.url + '/' + id)
        .toPromise()
        .then((res) => {
          return res.json() || {};
        });
    }
  }
