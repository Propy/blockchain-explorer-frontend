import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReadResponse} from './interfaces/responses/read-response';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeedService {
  constructor(private http: HttpClient) { }
  url = environment.deedResponse.url;
  endpoint = environment.deedResponse.endpoints.READ;

  read(responseType: string, addressOrHash: string) {
    const url = this.url + this.endpoint  + '/' + responseType + '/' + addressOrHash;
    return this.http.get<ReadResponse>(url);
  }
}
