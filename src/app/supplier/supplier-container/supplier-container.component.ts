import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { SwitchViewComponent } from 'src/app/shared/switch-view/switch-view.component';
import { Supplier } from '../models/supplier';
import { LoadData } from '../state/actions/supplier-actions';
import { getIsLoading, getSupplierItems } from '../state/reducers';
@Component({
  selector: 'app-supplier-container',
  templateUrl: './supplier-container.component.html',
  styleUrls: ['./supplier-container.component.scss']
})
export class SupplierContainerComponent implements OnInit, AfterViewInit {
  searchControl: FormControl = new FormControl();
 // isVisible$: Observable<boolean> = this.store.select(getIsLoading);
  items$: Observable<Supplier[]> = this.store.select(getSupplierItems, null);  
  @ViewChild("cardViewTemplate") private cardViewTemplate: TemplateRef<any>;
  @ViewChild("tableViewTemplate") private tableViewTemplate: TemplateRef<any>;
  defaultemplate: string;
  templates: Map<string, TemplateRef<any>> = new Map<string, TemplateRef<any>>();
  constructor(private ref: ChangeDetectorRef, private store: Store<any>) {
  }
  ngOnInit() {
    console.log(this.items$);
    this.defaultemplate = SwitchViewComponent.CARD_KEY;        
    this.getSuppliers(1, 10);   
  }
  ngAfterViewInit(): void {
    this.templates.set(SwitchViewComponent.CARD_KEY, this.cardViewTemplate);
    this.templates.set(SwitchViewComponent.TABLE_KEY, this.tableViewTemplate);
    this.ref.detectChanges();   
  }  
  getSuppliers(page: number, rows: number, searchTerm: string = ""): void {
    //this.service.getSupplierList(page, rows, searchTerm).subscribe(resp => { this.items = resp});
    this.store.dispatch(new LoadData(page, rows, searchTerm));    
  }
  buscar(){
    //this.searchControl.valueChanges.subscribe(val => { console.log(val) })
let ss = this.searchControl.value;
    // this.searchControl.valueChanges.pipe(filter(text => text.lenght >= 2),debounceTime(300),distinctUntilChanged())
 //   .subscribe(val => {    
     this.getSuppliers(1, 10, ss);
  //    });
  }
}