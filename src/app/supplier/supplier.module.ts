import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierContainerComponent } from './supplier-container/supplier-container.component';
import { SupplierListCardComponent } from './supplier-list-card/supplier-list-card.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { SupplierListTableComponent } from './supplier-list-table/supplier-list-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducers } from '../customer/state/reducers';
import { SupplierEffects } from './state/effects/supplier-effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SupplierService } from './supplier.service';
@NgModule({
  imports: [
    ReactiveFormsModule, FormsModule, CommonModule, SupplierRoutingModule ,
    StoreModule.forFeature("supplier", reducers),
    EffectsModule.forFeature([SupplierEffects]),
    MaterialModule, SharedModule  
  ],
  providers: [SupplierService],
  declarations: [SupplierContainerComponent, SupplierListCardComponent, SupplierListTableComponent]
})
export class SupplierModule { }