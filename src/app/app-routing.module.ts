import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TermsComponent} from './pages/terms/terms.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';
import {LoginComponent} from './login/login.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {TransactionDetailsComponent} from './transaction-details/transaction-details.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'terms', component: TermsComponent},
    { path: 'login', component: LoginComponent},
    { path: 'transactions', component: TransactionListComponent },
    { path: 'transaction/:platformType/:addressOrHash', component: TransactionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
