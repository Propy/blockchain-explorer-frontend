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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    TermsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [
    { provide: AbstractDateTime, useClass: DateTimeActual }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
