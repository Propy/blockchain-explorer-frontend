export const environment = {
  production: true,
  transactions: {
    page: 1,
    limit: 50,
    searchLimit: 20,
    url: 'http://5d2c9c3f8c90070014972764.mockapi.io',
    endpoint: '/transactions'
  },
  deedResponse: {
    url: 'https://bcexp-api.propy.biz:8150',
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
