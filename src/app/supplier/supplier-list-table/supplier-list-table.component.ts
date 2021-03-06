import { Component, Input, OnInit } from '@angular/core';
import { Supplier } from '../models/supplier';

@Component({
  selector: 'app-supplier-list-table',
  templateUrl: './supplier-list-table.component.html',
  styleUrls: ['./supplier-list-table.component.scss']
})
export class SupplierListTableComponent implements OnInit {
@Input()
items: Supplier[] = [];
public colums: object[] = [];
  constructor() { }

  ngOnInit() {
    this.colums = this.getColumns();
  }
 private getColumns(): object[]{
   return [
     {
       name: "Id",
       flexGrow: 0.5,
       prop: "id"
     },
     {
      name: "Company Name",      
      prop: "companyName",
      flexGrow: 3,
    },
    {
      name: "Contact Name",      
      prop: "contactName",
      flexGrow: 1,
    },
     {
      name: "City",      
      prop: "city",
      flexGrow: 0.5,
    }
   ];
 }
}