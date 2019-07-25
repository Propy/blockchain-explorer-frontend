
import {Observable} from 'rxjs';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {TransactionsService} from '../shared/transactions.service';
import {Transaction} from '../shared/models/transaction';
import {TransactionData} from '../shared/interfaces/transaction-data';
import {environment} from '../../environments/environment';
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  model: any;
  limit: number = environment.transactions.searchLimit;
  transactions: Transaction[];
  clickedItem: any;
  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  @ViewChild('searchForm', {static: true}) form: NgForm;


  constructor(private transactionsService: TransactionsService,
              private router: Router,
              private route: ActivatedRoute,
              private auth: AuthService) { }

  search = (text$: Observable<string>) => {
    return text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((searchText) => this.loadData(searchText))
    );
  }


  loadData = (keyword: any) => {
    return this.transactionsService.search(keyword, this.limit).pipe(map( (data: TransactionData) => {
      return data.items;
    }));
  }

  submit = (form) => {
    this.router.navigate(['/transaction', typeof form.value.model === 'object' ? form.value.model.id : form.value.model], {
      queryParams: {refresh: new Date().getTime()}
    });
  }

  formatter = (x: {id: string}) => x.id;

  selectedItem = (item) => {
    this.clickedItem = item;
    this.form.value.model = item.item;
    this.form.ngSubmit.emit();
  }

  ngOnInit(): void {
  }

  logout() {
    this.auth.performLogout();
  }

}
