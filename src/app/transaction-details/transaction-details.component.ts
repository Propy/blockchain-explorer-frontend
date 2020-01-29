import {Component, OnInit} from '@angular/core';
import {TransactionsService} from '../shared/transactions.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AuthService} from '../shared/auth.service';
import {Property} from '../shared/interfaces/property';
import {Deed} from '../shared/interfaces/deed';
import {DeedUser} from '../shared/interfaces/deed-user';
import {Document} from '../shared/interfaces/document';
import {DeedService} from '../shared/deed.service';
import * as BaseResponse from '../shared/interfaces/responses/read-response';
import {ResponseTypeEnum} from '../shared/enums/response-type.enum';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  private property: Property;
  private seller: DeedUser;
  private buyer: DeedUser;
  private deed: BaseResponse.ReadResponse;
  private document: Document;
  private response: BaseResponse.ReadResponse;
  public responseType: typeof ResponseTypeEnum;

  constructor(private transactionsService: TransactionsService,
              private route: ActivatedRoute,
              private auth: AuthService,
              private deedService: DeedService) {

    this.responseType = ResponseTypeEnum;

  }

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
    const addressOrHash = this.route.snapshot.paramMap.get('addressOrHash');
    const platformType  = this.route.snapshot.paramMap.get('platformType');

    try {
      this.deedService.read(platformType, addressOrHash).subscribe((response) => {
        this.deed = this.mapResponse(response);
        console.log(response);
      });
    } catch (e) {
      console.error(e);
    }

    // this.transactionsService.getTransaction(id).subscribe(([property, buyer, seller, document, deed]) => {
    //     this.buyer = buyer;
    //     this.seller = seller;
    //     this.property = property;
    //     this.document = document;
    //     this.deed = deed;
    // });

  }

  mapResponse(response: BaseResponse.ReadResponse) {
    let res = {} as BaseResponse.ReadResponse;
    switch (response.deedType) {
      case ResponseTypeEnum.DEED_HASHED:
        res = response as BaseResponse.DeedHashedResponse;
        break;
      case ResponseTypeEnum.TRANSACTION_PLATFORM_DEED_SIMPLE:
        res = response as BaseResponse.DeedSimpleResponse;
        break;
      case ResponseTypeEnum.TRANSACTION_PLATFORM_DEED:
        res = response as BaseResponse.TransactionPlatformDeedResponse;
        break;
      case ResponseTypeEnum.TRANSACTION_PLATFORM_SIMPLE_DEED:
        res = response as BaseResponse.SimpleDeedResponse;
        break;
      case ResponseTypeEnum.PRIVATE_REGISTRY_DOCUMENT:
        res = response as BaseResponse.RegistryDocumentResponse;
        break;
      case ResponseTypeEnum.DOCUMENT_REGISTRY_HASH:
        res = response as BaseResponse.DocumentRegistryHashResponse;
        break;
      case ResponseTypeEnum.DEED_REGISTRATION_DEED:
        res = response as BaseResponse.DeedResponse;
        break;
      default: throw Error('Invalid deed type');
    }
    return res;
  }
}
