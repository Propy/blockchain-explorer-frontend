import { Component, OnInit, Input } from '@angular/core';
import {SimpleDeedResponse, TransactionPlatformDeedResponse} from '../../../shared/interfaces/responses/read-response';

@Component({
  selector: 'app-transaction-platform-simple-deed',
  templateUrl: './transaction-platform-simple-deed.component.html',
  styleUrls: ['./transaction-platform-simple-deed.component.scss']
})
export class TransactionPlatformSimpleDeedComponent implements OnInit {

  @Input() deed: SimpleDeedResponse;
  constructor() { }

  ngOnInit() {
  }

}
