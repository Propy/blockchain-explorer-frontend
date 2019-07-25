import { Component, OnInit } from '@angular/core';
import {TransactionsService} from '../shared/transactions.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';
import {TransactionData} from '../shared/interfaces/transaction-data';
import {Transaction} from '../shared/models/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[];
  page: any = environment.transactions.page;
  limit: number = environment.transactions.limit;
  totalItems: any;
  previousPage: any;

  constructor(private transactionService: TransactionsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.transactionService.getAll(this.page, this.limit).subscribe((data: TransactionData) => {
      this.transactions = data.items;
      this.totalItems = data.count;
      // hardcode the data count because of the mock API
      this.totalItems = 100;
    });

  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

}
