const initialState = {

    currentUser: null,
    adminPassword:123

}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            debugger
            return {
                ...state,

                currentUser: action.payload
            }
        case "EXIT_USERS":
            return {
                ...state,
                currentUser: null

            }
        // case "SAVE_USERS":
        //     return {
        //         ...state,
        //         usersArr: action.payload
        //     }
        default:
            return state;

    }

}