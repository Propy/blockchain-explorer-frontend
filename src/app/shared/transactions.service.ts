import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {mergeMap} from 'rxjs/operators';
import {of, combineLatest} from 'rxjs';
import {Deed} from './interfaces/deed';
import {Property} from './interfaces/property';
import {Document} from './interfaces/document';
import {DeedUser} from './interfaces/deed-user';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }
  url  = environment.transactions.url + environment.transactions.endpoints.DEED;
  propertyUrl = environment.transactions.url + environment.transactions.endpoints.PROPERTY;
  userUrl = environment.transactions.url + environment.transactions.endpoints.USER;
  documentUrl = environment.transactions.url + environment.transactions.endpoints.DOCUMENT;

  getTransactionById = (id) => this.http.get<Deed>(this.url + '/' + id);

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

  searchTransaction = async (keyword = null) => {
    const addressValidUrl = environment.transactions.url + environment.transactions.endpoints.DEED + '/' + keyword;
    const result = await this.http.get(addressValidUrl).toPromise();

    console.log(result);

    return result;
  }

  getProperty = (id) => {
      return this.http.get<Property>(this.propertyUrl + '/' + id, {});
  }

  getUser = (id) => {
      return this.http.get<DeedUser>(this.userUrl + '/' + id, {});
  }

  getDocument = (id) => {
      return this.http.get<Document>(this.documentUrl + '/' + id, {});
  }

  getTransaction = id => {
      const transaction$ = this.getTransactionById(id);
      return transaction$.pipe(
          mergeMap( (deed: Deed) => {
              return combineLatest([
                  this.getProperty(deed.addresses.property),
                  this.getUser(deed.addresses.buyers),
                  this.getUser(deed.addresses.sellers),
                  of(deed)
              ]);
          })
      );
  }
}

