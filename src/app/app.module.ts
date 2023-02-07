import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanTableComponent } from './loan-table/loan-table.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
    LoanTableComponent,
    LoanFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
