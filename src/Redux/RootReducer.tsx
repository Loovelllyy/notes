import {ASYNC, DECREMENT, GET_PHOTO, INCREMENT} from './actions'

const rootReducer = function (state = {num: 0, photo: ''}, action: { type: string, payload: any} = {type: '', payload: ''}) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, { num: state.num + 1 })
        case DECREMENT:
            return Object.assign({}, state, { num: state.num - 1 });
        case ASYNC:
            return Object.assign({}, state, { num: state.num * 2 });
        case GET_PHOTO:
            return Object.assign({}, state, { photo: action.payload });
        default:
            return state;
    }
};

export default rootReducer;