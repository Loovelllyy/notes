import {ASYNC, DECREMENT, INCREMENT, GET_PHOTO} from "./actions";

const inc = {
    type: INCREMENT
}
const dec = {
    type: DECREMENT
}
const async = {
    type: ASYNC
}

const getPhoto = {
    type: GET_PHOTO,
    payload: []
}

export { inc, dec, async, getPhoto }