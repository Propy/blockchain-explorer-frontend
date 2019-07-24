import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {OAuth2GrantTypes} from './utils/oauth2-grant-types';
import axios, {AxiosPromise} from 'axios';
import {OAuth2TokenTypes} from './utils/oauth2-token-types';
import {BrowserDetectionService} from './utils/browser-detection.service';
import {UserTokenService} from './user-token.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private hubSpotCookieNumber = '';
  private hasUserLoggedIn: any;

  constructor(private http: HttpClient,
              private browserDetectionService: BrowserDetectionService,
              private userTokenService: UserTokenService,
              private router: Router,
  ) { }
  performLogin = async (username, password): Promise<boolean> => {
      const config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      };
      let result;
      let data;
      if (this.browserDetectionService.isIE) {
        data = OAuth2GrantTypes.getGrantTypePasswordDataObject(username, password);

        result = await this.postWithIdentitySerialization(
            environment.identityServer.endpoints.GET_TOKEN,
            data,
            config
        );
      } else {
        data = OAuth2GrantTypes.getGrantTypePasswordDataURLParams(username, password);
        result = await this.postWithIdentity(
            environment.identityServer.endpoints.GET_TOKEN,
            data,
            config
        );
      }

      this.userTokenService.storeTokens(result.data.access_token, result.data.refresh_token, result.data.expires_in, false);
      this.router.navigate(['/']);
      return true;
  }

  private postWithIdentitySerialization = (endpoint: string, data: object, config: object = {}): AxiosPromise => {
    let configObj = {
      headers: {
        ...this.isChina,
        hubspotutk: this.hubSpotCookieNumber,
      },
      ...config,
    };
    if (this.hasUserLoggedIn) {
      configObj = {
        headers: {
          ...this.bearerHeaderObject,
          ...this.isChina,
          hubspotutk: this.hubSpotCookieNumber,
        },
        ...config,
      };
    }

    const url = environment.identityServer.url + endpoint;
    const dataUrlEncoded = this.serialize(data);
    return axios.post(url, dataUrlEncoded, configObj);
  }

  private serialize = (obj) => {
    return Object.keys(obj)
        .reduce((a, k) => {
          a.push(k + '=' + encodeURIComponent(obj[k]));
          return a;
        }, [])
        .join('&');
  }

  private get bearerHeaderObject(): object {
    return {
      Authorization: this.bearerHeaderString,
    };
  }

  private get bearerHeaderString(): string {
    return `${OAuth2TokenTypes.PROPY} ${this.userTokenService.getAccessToken()}`;
  }

  private get isChina() {
    return {
      china: environment.china,
    };
  }

  /**
   * @desc User for to get access and refresh tokens from the identity server
   */
  public postWithIdentity(endpoint: string, data: object, config: object = {}): AxiosPromise {
    let configObj = {
      headers: {
        ...this.isChina,
        hubspotutk: this.hubSpotCookieNumber,
      },
      ...config,
    };
    if (this.hasUserLoggedIn) {
      configObj = {
        headers: {
          ...this.bearerHeaderObject,
          ...this.isChina,
          hubspotutk: this.hubSpotCookieNumber,
        },
        ...config,
      };
    }

    const url = environment.identityServer.url + endpoint;
    return axios.post(url, data, configObj);
  }

}
