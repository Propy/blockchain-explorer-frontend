import {AbstractDateTime} from './utils/date-time.service';
import {Injectable, Inject} from '@angular/core';
import { LOCAL_STORAGE, SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const accessTokenKey = 'propyAccessToken';
const refreshTokenKey = 'propyRefreshToken';
const expiryTokenKey = 'propyExpiryToken';

@Injectable({
  providedIn: 'root'
})
export class UserTokenService {
  constructor(
      private dateTime: AbstractDateTime,
      @Inject(LOCAL_STORAGE) private persistent: StorageService,
      @Inject(SESSION_STORAGE) private session: StorageService
  ) {  }

  storeTokens(accessToken: string, refreshToken: string, expiresInSeconds: number, rememberMe: boolean = false) {
    const expiry = this.dateTime.now();
    expiry.setSeconds(this.dateTime.now().getSeconds() + expiresInSeconds);
    const tokenExpireTimestamp = this.getTimestamp(expiry);

    const store = rememberMe ? this.persistent : this.session;

    store.set(accessTokenKey, accessToken);
    store.set(refreshTokenKey, refreshToken);
    store.set(expiryTokenKey, tokenExpireTimestamp);
  }

  hasStoredTokens() {
    const accessToken = this.getAccessToken();

    return accessToken != null && accessToken !== '' && accessToken.length > 0;
  }

  getAccessToken() {
    return this.persistent.get(accessTokenKey) || this.session.get(accessTokenKey);
  }
  refreshToken(): string {
    return this.persistent.get(refreshTokenKey) || this.session.get(refreshTokenKey);
  }

  isTokenExpired() {
    const expiryTimestamp = this.persistent.get(expiryTokenKey) || this.session.get(expiryTokenKey);
    let expired = true;
    if (expiryTimestamp != null) {
      expired = this.getTimestamp(this.dateTime.now()) > expiryTimestamp;
    }
    return expired;
  }

  clearTokens() {
    this.persistent.remove(accessTokenKey);
    this.session.remove(accessTokenKey);
    this.persistent.remove(expiryTokenKey);
    this.session.remove(expiryTokenKey);
    this.persistent.remove(refreshTokenKey);
    this.session.remove(refreshTokenKey);
  }

  private getTimestamp(date: Date): string {
    return date.getTime().toString();
  }
}
