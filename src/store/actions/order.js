export const saveOrderDetails = (order) => {
    return {
        type: "SAVE_ORDER_DETAILS",
        payload: order
    }
}

export const addToCart = (pro, qty) => {
    return {
        type: "ADD_TO_CART",
        payload: { ...pro, amount:qty }
    }
}

export const updateCart= (id,qty) => {
    return {
        type: "UPDATE_CART",
        payload: {id,qty}
    }
}