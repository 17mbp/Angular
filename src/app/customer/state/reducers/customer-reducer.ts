import { Customer } from "../../models/customer";
import { CustomerActions, CustomerActionsTypes } from "../actions/customer-actions";
export interface State {
    items: Customer[];
    isLoading: boolean;
    numberOfRecords: number;
}
const initialSatate: State = {
    items: [],
    isLoading: false,
    numberOfRecords: 0
};
export function CustomerReducer(state = initialSatate, action: CustomerActions): State
{
    switch(action.type){ 
        case CustomerActionsTypes.LoadData:
            return {...state, numberOfRecords: 0, isLoading: true};
        case CustomerActionsTypes.LoadDataCompleted:
            return {...state, items: action.payload, numberOfRecords: action.payload[0].totalRecords, 
                isLoading: false};
        default: 
            return state;
    };
}
export const getCustomerItems = (state: State) => state.items;
export const getIsLoading = (state: State) => state.isLoading;
export const getNumberOfRecords = (state: State) => state.numberOfRecords;