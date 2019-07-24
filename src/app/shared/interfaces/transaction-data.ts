import {Transaction} from '../models/transaction';

export interface TransactionData {
    items: Transaction[];
    count: number;
}
