import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from '../models/customer';
import { MatDialog  } from '@angular/material';
import { NewCustomerComponent } from '../new-customer/new-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { DetailCustomerComponent } from '../detail-customer/detail-customer.component';
import { Store } from '@ngrx/store';
import { LoadData } from '../state/actions/customer-actions';
import { Observable } from 'rxjs';
import { getCustomerItems } from '../state/reducers';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],//    providers: [CustomerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit {
 // customers$: Customer[] = [];
  customers$: Observable<Customer[]> = this.store.select(getCustomerItems);
  numberOfRecords = 0;
  pageSizeOptions: number[] = [10, 21, 30];
  pageSize = 10;
  pageIndex = 0;
  constructor(public dialog: MatDialog, 
    private store: Store<any>,
    private customerService: CustomerService) {
   // this.getCustomer(1, this.pageSize); 
  }
  ngOnInit() {  //
    this.store.dispatch(new LoadData(1, this.pageSize));
  }
  getCustomer(page: number, rows: number): void {
   //this.isVisible = true;
   //  this.customerService.getCustomerList(page, rows).subscribe(response => {
     //  this.customers$ = response; 
     //  this.numberOfRecords = response[0].totalRecords });
  }
  changePage(event: any): void {
    this.getCustomer(event.pageIndex + 1, event.pageSize);
  }
  newCustomer(): void {
    const dialogRef = this.dialog.open(NewCustomerComponent, {
      panelClass: "new-customer-modal-dialog"
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCustomer(1, 10);
    });
  }
  editCustomer(id: number): void {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      panelClass: "new-customer-modal-dialog",
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCustomer(1, 10);
    });
  }
  viewDetails(id: number): void{
    const dialogRef = this.dialog.open(DetailCustomerComponent, {
      panelClass: "new-customer-modal-dialog",
      data: {id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCustomer(1, 10);
    });
  }
}