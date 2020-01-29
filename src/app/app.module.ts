import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StorageServiceModule} from 'angular-webstorage-service';
import {AbstractDateTime, DateTimeActual} from './shared/utils/date-time.service';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './pages/about/about.component';
import {TermsComponent} from './pages/terms/terms.component';
import {ContactComponent} from './pages/contact/contact.component';
import { LoginComponent } from './login/login.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {TransactionDetailsComponent} from './transaction-details/transaction-details.component';
import {WatchlistComponent} from './watchlist/watchlist.component';
import { HomeComponent } from './pages/home/home.component';
import { DeedHashedComponent } from './transaction-details/deed-types/deed-hashed/deed-hashed.component';
import { DeedRegistrationDeedComponent } from './transaction-details/deed-types/deed-registration-deed/deed-registration-deed.component';
import { TransactionPlatformDeedComponent } from './transaction-details/deed-types/transaction-platform-deed/transaction-platform-deed.component';
import { TransactionPlatformDeedSimpleComponent } from './transaction-details/deed-types/transaction-platform-deed-simple/transaction-platform-deed-simple.component';
import {TransactionPlatformSimpleDeedComponent} from './transaction-details/deed-types/transaction-platform-simple-deed/transaction-platform-simple-deed.component';
import { DocumentRegistryHashComponent } from './transaction-details/deed-types/document-registry-hash/document-registry-hash.component';
import { RegistryDocumentComponent } from './transaction-details/deed-types/registry-document/registry-document.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    TermsComponent,
    ContactComponent,
    LoginComponent,
    TransactionListComponent,
    TransactionDetailsComponent,
    WatchlistComponent,
    HomeComponent,
    DeedHashedComponent,
    DeedRegistrationDeedComponent,
    TransactionPlatformDeedComponent,
    TransactionPlatformDeedSimpleComponent,
    TransactionPlatformSimpleDeedComponent,
    DocumentRegistryHashComponent,
    RegistryDocumentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        StorageServiceModule,
    ],
  providers: [
    { provide: AbstractDateTime, useClass: DateTimeActual }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
