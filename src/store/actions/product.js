export const addProduct = (prod) => {
    return {
        type: "ADD_PRODUCT",
        payload: prod
    }
}
export const deleteProduct = (prodId) => {
    return {
        type: "DELETE_PRODUCT",
        payload: prodId
    }
}
export const saveProducts = (prodArr) => {
    return {
        type: "SAVE_PRODUCTS",
        payload: prodArr
    }
}
// export const updateProduct= (id,qty) => {
//     return {
//         type: "UPDATE_PRODUCT",
//         payload: {id,qty}
//     }
// }