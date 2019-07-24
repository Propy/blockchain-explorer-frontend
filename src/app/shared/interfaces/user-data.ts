import {User} from './user';

export interface UserData {
    isAnonymous: boolean;
    user: User | null;
    isAdmin?: boolean;
}
