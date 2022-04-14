import * as different_name from "../reducers/customer-reducer";
import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
export interface CustomerState {
   customer: different_name.State;
}
export const reducers: ActionReducerMap<CustomerState> = {
   customer: different_name.CustomerReducer
};
//feature module state compostion
export const getCustomerModuleState = createFeatureSelector<CustomerState>("customer");
export const getCustomerState = createSelector(getCustomerModuleState, state => state.customer);
export const getCustomerItems = createSelector(getCustomerState, different_name.getCustomerItems);
export const getIsLoading = createSelector(getCustomerState, different_name.getIsLoading);
export const getNumbersOfRecords = createSelector(getCustomerState, different_name.getNumberOfRecords);