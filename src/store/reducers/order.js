const initialState = {
    cart: [],
    details: {
    idCustomer:null, 
    orderDate:null,
    getDate:null,
    productsArr:null
    }
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let index1 = state.cart.findIndex(x=>x._id == action.payload._id); 
             
            if(index1!= -1){      
               state.cart[index1].amount++;
            }
            else
            {
                state.cart.push(action.payload);
                // arr[index].amount = action.payload.qty;
                
            }
            return {
                ...state,
                cart: [...state.cart]
            }
        case "SAVE_ORDER_DETAILS":
            return {
                ...state,
                details: action.payload
            }
         case "UPDATE_CART":
        
            let index = state.cart.findIndex(x=>x._id == action.payload.id); 
            //  let arr =  [...state.cart];
            if(index!= -1){      
               state.cart[index].amount=action.payload.qty;
            }
            
             
            return {...state,cart:[...state.cart]}

        default: return state;
    }
}