import { Component, OnInit, Input } from '@angular/core';
import {DeedSimpleResponse} from '../../../shared/interfaces/responses/read-response';

@Component({
  selector: 'app-transaction-platform-deed-simple',
  templateUrl: './transaction-platform-deed-simple.component.html',
  styleUrls: ['./transaction-platform-deed-simple.component.scss']
})
export class TransactionPlatformDeedSimpleComponent implements OnInit {

  @Input() deed: DeedSimpleResponse;
  constructor() { }

  ngOnInit() {
  }

}
