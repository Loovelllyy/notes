import {ASYNC, DECREMENT, GET_PHOTO, INCREMENT} from './actions'

const rootReducer = function (state: {num: number, photos: []} = {num: 0, photos: []}, action: { type: string; }) {
    switch (action.type) {
        case INCREMENT:
            state.num = state.num + 1;
            return {num: state.num, photos: []};
        case DECREMENT:
            state.num = state.num - 1;
            return {num: state.num, photos: []};
        case ASYNC:
            state.num = state.num * 2;
            return {num: state.num, photos: []};
        case GET_PHOTO:
            return {num: state.num, photos: []};
        default:
            return state;
    }
};

export default rootReducer;