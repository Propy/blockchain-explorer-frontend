import { Component, OnInit, Input } from '@angular/core';
import {TransactionPlatformDeedResponse} from '../../../shared/interfaces/responses/read-response';

@Component({
  selector: 'app-transaction-platform-deed',
  templateUrl: './transaction-platform-deed.component.html',
  styleUrls: ['./transaction-platform-deed.component.scss']
})
export class TransactionPlatformDeedComponent implements OnInit {

  @Input() deed: TransactionPlatformDeedResponse;
  constructor() { }

  ngOnInit() {
  }

}
