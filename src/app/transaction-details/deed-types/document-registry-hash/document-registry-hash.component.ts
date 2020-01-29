import { Component, OnInit, Input } from '@angular/core';
import {DocumentRegistryHashResponse} from '../../../shared/interfaces/responses/read-response';

@Component({
  selector: 'app-document-registry-hash',
  templateUrl: './document-registry-hash.component.html',
  styleUrls: ['./document-registry-hash.component.scss']
})
export class DocumentRegistryHashComponent implements OnInit {

  @Input() deed: DocumentRegistryHashResponse;
  constructor() { }

  ngOnInit() {
  }

}
