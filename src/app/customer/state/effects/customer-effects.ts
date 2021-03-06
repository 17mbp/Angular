import { Injectable } from "@angular/core";
import { ofType, Actions, Effect } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { CustomerService } from "../../customer-list/customer.service";
import { CustomerActionsTypes, LoadData, LoadDataCompleted } from "../actions/customer-actions";

@Injectable()
export class CustomerEffects {
    constructor(private customerService: CustomerService, private actions$:Actions) {        

    }
    @Effect()
    initLoad$=this.actions$.pipe(ofType<LoadData>(CustomerActionsTypes.LoadData),
    switchMap(action => this.customerService.getCustomerList(action.page,action.rows))
        ,map(items => new LoadDataCompleted(items))
    );
}