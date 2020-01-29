import { Component, OnInit, Input } from '@angular/core';
import {RegistryDocumentResponse} from '../../../shared/interfaces/responses/read-response';

@Component({
  selector: 'app-registry-document',
  templateUrl: './registry-document.component.html',
  styleUrls: ['./registry-document.component.scss']
})
export class RegistryDocumentComponent implements OnInit {

  @Input() deed: RegistryDocumentResponse;
  constructor() { }

  ngOnInit() {
  }

}
