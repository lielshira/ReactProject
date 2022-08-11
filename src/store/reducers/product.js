const initialState = {
    productsArr: []
    // currnetUser: null
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                productsArr: [...state.productsArr, action.payload]
            }
        case "DELETE_PRODUCT":
            let a = state.productsArr.filter(item => item._id != action.payload._id);
            return {
                ...state,
                productsArr: a
            }
        case "SAVE_PRODUCTS":
            return {
                ...state,
                productsArr: action.payload
            }
        case "UPDATE_PRODUCT":
            debugger
            // let index = state.productsArr.findIndex(x=>x._id == action.payload.id)
            // if(index!= -1)
            // state.productsArr[index].amount = action.payload.qty
            //           return {...state}

                // let index = state.productsArr.indexOf(state.productsArr.find(x=>x._id==action.payload._id))
                // if(index!=-1)
                // state.productsArr[index] = action.payload
                // return {
                //     ...state,
                //     productsArr: nArr
                // }
        default:
         return state;

    }
    
}