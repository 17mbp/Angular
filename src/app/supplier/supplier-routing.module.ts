import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierContainerComponent } from './supplier-container/supplier-container.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role.enum';
const SupplierRoutes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: SupplierContainerComponent
    }
  ],
  canActivate: [AuthGuard],
  data: {expectedRote: Role.AdminSupplier}
}];
@NgModule({
  imports: [
    RouterModule.forChild(SupplierRoutes) 
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class SupplierRoutingModule { }