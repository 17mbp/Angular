import { Supplier } from "../../models/supplier";
import { SupplierActions, SupplierActionsTypes } from "../../state/actions/supplier-actions"; 
export interface State {
    items: Supplier[]; 
    isVisible: boolean;
}
const initialSatate: State = {
    items: [],
    isVisible: false
};
export function SupplierReducer(state = initialSatate, action: SupplierActions): State
{
    switch(action.type){ 
        case SupplierActionsTypes.LoadData:
            return {...state
             //   numberOfRecords: 0,
                ,isVisible: true
            };
        case SupplierActionsTypes.LoadDataCompleted:
            return {...state, items: action.payload
                //numberOfRecords: action.payload[0].totalRecords, 
                ,isVisible: false
            };
        default: 
            return state;
    };
}
export const getSupplierItems = (state: State) => state.items;
export const getIsLoading = (state: State) => state.isVisible;
//export const getNumberOfRecords = (state: State) => state.numberOfRecords;