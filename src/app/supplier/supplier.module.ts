import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierContainerComponent } from './supplier-container/supplier-container.component';
import { SupplierListCardComponent } from './supplier-list-card/supplier-list-card.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { SupplierListTableComponent } from './supplier-list-table/supplier-list-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ReactiveFormsModule, FormsModule, CommonModule, SupplierRoutingModule , MaterialModule, SharedModule  
  ],
  declarations: [SupplierContainerComponent, SupplierListCardComponent, SupplierListTableComponent]
})
export class SupplierModule { }