import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {TermsComponent} from './pages/terms/terms.component';
import {WatchlistComponent} from './watchlist/watchlist.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'transaction/:id', component: TransactionDetailsComponent },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'watchlist', component: WatchlistComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
