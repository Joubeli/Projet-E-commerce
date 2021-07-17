import { REGISTER_USER } from "../constants/actionType";


const intialState = {
    users: [],
    userId: {},
    isEdit: false
}

const reducerUser = (state = intialState, action) => {
    /*  switch (action.type) {
        case REGISTER_USER:
            return { ...state, users: action.payload };

        default:
            return state;
    }  */
}

export default reducerUser