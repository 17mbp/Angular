import * as supplierFrom from "./supplier-reducer";
import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
export interface SupplierState {
   supplier: supplierFrom.State;
}
export const reducers: ActionReducerMap<SupplierState> = {
   supplier: supplierFrom.SupplierReducer
};
//feature module state compostion
export const getSupplierModuleState = createFeatureSelector<SupplierState>("supplier");
export const getSupplierState = createSelector(getSupplierModuleState, state => state.supplier);
export const getSupplierItems = createSelector(getSupplierState, supplierFrom.getSupplierItems);
export const getIsLoading = createSelector(getSupplierState, supplierFrom.getIsLoading);
//export const getNumbersOfRecords = createSelector(getSupplierState, supplierFrom.getNumberOfRecords);