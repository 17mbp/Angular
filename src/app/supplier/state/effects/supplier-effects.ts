import { Injectable } from "@angular/core";
import { ofType, Actions, Effect } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { SupplierService } from "../../supplier.service";
import { SupplierActionsTypes, LoadData, LoadDataCompleted } from "../actions/supplier-actions";
@Injectable()
export class SupplierEffects {
    constructor(private supplierService: SupplierService, private actions$: Actions) {    
    }
    @Effect()
    initLoad$=this.actions$.pipe(ofType<LoadData>(SupplierActionsTypes.LoadData),
    switchMap(action => 
        this.supplierService.getSupplierList(action.page,action.rows,action.searchTerm))
        ,map(items => new LoadDataCompleted(items))
    );
}