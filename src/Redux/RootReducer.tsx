import {INCREMENT, DECREMENT, ASYNC} from './actions'

const rootReducer = function (state = 0, action: { type: string; }) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case ASYNC:
            return state * 2;
        default:
            return state;
    }
};

export default rootReducer;