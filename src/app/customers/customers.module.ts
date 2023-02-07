import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';



@NgModule({
  declarations: [
    CustomersComponent,
    CreateCustomerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomersComponent,
  ]
})
export class CustomersModule { }
