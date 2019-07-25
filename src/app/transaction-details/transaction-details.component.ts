import { Component, OnInit } from '@angular/core';
import {TransactionsService} from '../shared/transactions.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Transaction } from '../shared/models/transaction';
import { Observable } from 'rxjs';
import {UserTokenService} from '../shared/user-token.service';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  private transaction: Transaction;
  private isUserLogged: boolean;
  constructor(private transactionsService: TransactionsService,
              private route: ActivatedRoute,
              private auth: AuthService) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      const refresh = paramMap.get('refresh');
      if (refresh) {
        this.fetchData();
      }
    });

    this.fetchData();
  }

  fetchData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.transactionsService.getTransactionById(id).subscribe( (data: Transaction) => { this.transaction = data; } );
  }
}
