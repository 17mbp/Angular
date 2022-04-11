import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent<T> implements OnInit {
  @Input() minTablaHeight: number = 500;
  @Input() items: object[] = [];
  @Input() colums: object[] = [];
  @Input() limit?: number;
  @Input() detailTemplate?: TemplateRef<any>;
  @ViewChild('myTabla') table: any;
  constructor() { }
  ngOnInit() {
  }
  toggleExpandRow(row){
    this.table.rowDetail.toggleExpandRow(row);
  }
}