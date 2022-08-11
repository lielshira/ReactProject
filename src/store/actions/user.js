export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user
    }
}
// export const saveUser = (userArr) => {
//     return {
//         type: "SAVE_USERS",
//         payload: userArr
//     }
// }
export const exitUser = (user) => {
    return {
        type: "EXIT_USERS",
        payload: user
    }
}