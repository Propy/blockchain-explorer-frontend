import {Component, Input, OnInit} from '@angular/core';
import {DeedResponse} from '../../../shared/interfaces/responses/read-response';

@Component({
  selector: 'app-deed-registration-deed',
  templateUrl: './deed-registration-deed.component.html',
  styleUrls: ['./deed-registration-deed.component.scss']
})
export class DeedRegistrationDeedComponent implements OnInit {

  @Input() deed: DeedResponse;
  constructor() { }

  ngOnInit() {
  }

}
