const INCREMENT: string = 'INCREMENT';
const DECREMENT: string = 'DECREMENT';
const ASYNC: string = 'ASYNC';
const GET_PHOTO: string = 'GET_PHOTO';

const inc = {
    type: INCREMENT
}
const dec = {
    type: DECREMENT
}
const async = {
    type: ASYNC
}
const getPhoto = (url: string) => {
    return {
        type: GET_PHOTO,
        payload: url,
    }
}

export { inc, dec, async, getPhoto }
export { INCREMENT, DECREMENT, ASYNC, GET_PHOTO }