import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserDetectionService {
  constructor() {}

  get isIE(): boolean {
    const userAgent = window.navigator.userAgent;

    /*
 Test values; Uncomment to check result …

     IE 10
     userAgent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

     IE 11
     userAgent = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

     IE 12 / Spartan
     userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

     Edge (IE 12+)
     userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
     Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
*/

    const msie = userAgent.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older
      return true;
    }

    const trident = userAgent.indexOf('Trident/');
    if (trident > 0) {
      // IE 11
      return true;
    }

    const edge = userAgent.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+)
      return true;
    }

    // other browser
    return false;
  }

  get isSafari(): boolean {
    const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
    let isSafari = navigator.userAgent.indexOf('Safari') > -1;

    if (isChrome && isSafari) {
      isSafari = false;
    }

    return isSafari;
  }

  get isFirefox(): boolean {
    const firefox = navigator.userAgent.indexOf('Gecko/');
    return firefox > 0;
  }
}
