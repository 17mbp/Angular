import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { MatDialog  } from '@angular/material';
import { NewCustomerComponent } from '../new-customer/new-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { DetailCustomerComponent } from '../detail-customer/detail-customer.component';
import { Store } from '@ngrx/store';
import { LoadData } from '../state/actions/customer-actions';
import { Observable } from 'rxjs';
import { getCustomerItems, getIsLoading, getNumbersOfRecords } from '../state/reducers';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit {  
  isLoading$: Observable<boolean> = this.store.select(getIsLoading); 
  customers$: Observable<Customer[]> = this.store.select(getCustomerItems);
  numberOfRecords$: Observable<number> = this.store.select(getNumbersOfRecords);
  pageSizeOptions: number[] = [10, 21, 30];
  pageSize = 10;
  pageIndex = 0;  
  constructor(public dialog: MatDialog, private store: Store<any>) {    }
  ngOnInit() {  
    this.store.dispatch(new LoadData(1, this.pageSize));
  }
  getCustomer(page: number, rows: number): void {   
    this.store.dispatch(new LoadData(page, rows))  
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