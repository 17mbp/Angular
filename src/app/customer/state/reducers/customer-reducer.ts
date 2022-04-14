import { Customer } from "../../models/customer";
import { CustomerActions, CustomerActionsTypes } from "../actions/customer-actions";
export interface State {
    items: Customer[];
}
const initialSatate: State = {
    items: []
};
export function CustomerReducer(state = initialSatate, action: CustomerActions): State
{
    switch(action.type){ 
        case CustomerActionsTypes.LoadData:
            return {...state};
        case CustomerActionsTypes.LoadDataCompleted:
            return {...state, items: action.payload};
        default: 
            return state;
    };
}
export const getCustomerItems = (state: State) => state.items;