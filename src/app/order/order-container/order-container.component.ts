import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableViewComponent } from 'src/app/shared/table-view/table-view.component';
import { OrderList } from '../models/order-list';
import { OrderContainerService } from './order-container.service';
@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss'],
  providers: [OrderContainerService]
})
export class OrderContainerComponent implements OnInit, AfterViewInit {
  items: OrderList[] = [];
  public colums: Object[] = [];
  public detailColums: Object[] = [];
  @ViewChild("tableView") tableView: TableViewComponent<any>;
  @ViewChild("orderIdCellTemplate") private orderIdCellTemplate: TemplateRef<any>;
  @ViewChild("orderNumberCellTemplate") private orderNumberCellTemplate: TemplateRef<any>;
  numberOfRecords = 0;
  pageSizeOptions: number[] =[10,20,30];
  pageSize = 10;
  pageIndex = 0;
  constructor(private ref: ChangeDetectorRef, private service: OrderContainerService) {   }
  ngOnInit() {
    this.getOrders(1, 10);
  }
  ngAfterViewInit(): void {
    this.colums = this.getColumns();
    this.detailColums = this.getDetailsColumns();
    this.ref.detectChanges();
  }
  getOrders(page: number, rows: number): void {
    this.service.getOrderList(page, rows)
      .subscribe(response => {
        this.items = response;
        this.numberOfRecords = response[0].totalRecords;
      });
  }
  changePage(event: any): void{
    this.getOrders(event.pageIndex + 1, event.pageSize);
  }
  toggleExpandRow(row) {
    this.tableView.toggleExpandRow(row);
    this.ref.detectChanges();
  }
  private getColumns(): object[] {
    return [
      {
        name: "Id",
        flexGrow: 0.5,
        cellTemplate: this.orderIdCellTemplate
      }, {
        name: "Customer",
        prop: "customer",
        flexGrow: 1,
      }, {
        name: "Total",
        prop: "totalAmount",
        flexGrow: 1,
      }, {
        name: "# Order",
        //prop: "orderNumber",
        cellTemplate: this.orderNumberCellTemplate,
        flexGrow: 1
      }
    ];
  }
  private getDetailsColumns(): object[] {
    return [
      {
        name: "Product",
        flexGrow: 0.5,
        prop: "productName"

      }, {
        name: "unitPrice",
        flexGrow: 1,
        prop: "unitPrice"
      }, {
        name: "quantity",
        flexGrow: 1,
        prop: "quantity"
      }
    ];
  }
}