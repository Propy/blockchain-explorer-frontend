// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  transactions: {
    page: 1,
    limit: 50,
    searchLimit: 20,
    url: 'http://localhost',
    endpoint: '/transactions',
    endpoints: {
      DEED: '/deed',
      PROPERTY: '/property',
      USER: '/user',
      DOCUMENT: '/document'
    }
  },
  deedResponse: {
    url: 'http://172.31.92.252:8150',
    endpoints: {
      READ: '/read'
    }
  },
  identityServer: {
    url: 'https://dev.api.identityserver.propy.com',
    endpoints: {
      GET_TOKEN: '/connect/token',
      REGISTER_USER: '/api/v3/users/register',
      REFRESH_TOKEN: '/connect/token',
      GET_USER: '/Users/single'
    }
  },
  clientId: '',
  clientSecret: '',
  china: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
