import {
    ADD_USER,
    USER_FAILED,
    ADD_HISTORY,
    HISTORY_FAILED,
    SHOW_HISTORY
} from './actions';

const initialState = {
    singedIn: false,
    name: "",
    history: []
};

function History (state=initialState, action) {
    console.log("Entered History in Reducer", action);
    switch(action.type) {
        case ADD_HISTORY:
            return {...state, history: [...state.history, action.history]};
        case SHOW_HISTORY:
            return {...state, history: [action.history]};
        default:
            return state;
    }
};

export default History;