import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }
  url  = environment.transactions.url + environment.transactions.endpoint;

  getTransactionById = id => this.http.get(this.url + '/' + id);

  getAll = (page, limit) => {
    const params = new HttpParams()
        .set('page', page)
        .set('limit', limit);

    return this.http.get(this.url , {params});

  }

  search = (keyword = null, limit = null) => {
    const params = new HttpParams()
        .set('search', keyword === null ? '' : keyword)
        .set('limit', limit);
    return this.http.get(this.url, {params});
  }
}
