export const environment = {
  production: true,
  transactions: {
    page: 1,
    limit: 50
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
