import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { MaterialModule } from '../material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './state/reducers';
import { CustomerEffects } from './state/effects/customer-effects';
import { CustomerService } from './customer-list/customer.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature("customer", reducers),
    EffectsModule.forFeature([CustomerEffects]),
    CustomerRoutingModule,    
    MaterialModule   
  ],
  providers: [CustomerService],
  declarations: [CustomerListComponent, NewCustomerComponent, EditCustomerComponent, DetailCustomerComponent],
  entryComponents: [NewCustomerComponent, EditCustomerComponent, DetailCustomerComponent]
})
export class CustomerModule { }