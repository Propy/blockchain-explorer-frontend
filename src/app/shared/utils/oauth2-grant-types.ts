import { environment} from '../../../environments/environment';

export class OAuth2GrantTypes {
    public static GRANT_TYPES = {
        PASSWORD: 'password',
        REFRESH_TOKEN: 'refresh_token',
    };

    static getGrantTypePasswordDataURLParams(username: string, password: string): URLSearchParams {
        const params = new URLSearchParams();
        params.append('grant_type', this.GRANT_TYPES.PASSWORD);
        params.append('username', username);
        params.append('password', password);
        params.append('client_id', 'ro.client');
        params.append('client_secret', '');
        return params;
    }

    static getGrantTypePasswordDataObject(username: string, password: string): object {
        return {
            grant_type: this.GRANT_TYPES.PASSWORD,
            username,
            password,
            client_id: 'ro.client',
            client_secret: '',
        };
    }

    static getGrantTypeExternalDataObject(type: string, key: string): object {
        return {
            type,
            key,
        };
    }

    static getGrantTypeRefreshTokenDataURLParams(refreshToken: string): URLSearchParams {
        const params = new URLSearchParams();
        params.append('grant_type', this.GRANT_TYPES.REFRESH_TOKEN);
        params.append('refresh_token', refreshToken);
        params.append('client_id', 'ro.client');
        params.append('client_secret', '');
        return params;
    }

    static getGrantTypeRefreshTokenDataObject(refreshToken: string): object {
        return {
            grant_type: this.GRANT_TYPES.REFRESH_TOKEN,
            refresh_token: refreshToken,
            client_id: environment.clientId,
            client_secret: environment.clientSecret,
        };
    }
}
