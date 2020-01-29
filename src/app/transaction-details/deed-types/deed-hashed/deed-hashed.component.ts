import {Component, Input, OnInit} from '@angular/core';
import {DeedHashedResponse} from '../../../shared/interfaces/responses/read-response';

@Component({
  selector: 'app-deed-hashed',
  templateUrl: './deed-hashed.component.html',
  styleUrls: ['./deed-hashed.component.scss']
})
export class DeedHashedComponent implements OnInit {

  @Input() deed: DeedHashedResponse;
  constructor() { }

  ngOnInit() {
  }

}
