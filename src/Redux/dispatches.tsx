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
const getPhoto = (url: string) => {
    return {
        type: GET_PHOTO,
        payload: url,
    }
}

type TData = {"albumId": number, 'id': number, 'title': string, 'url': string, "thumbnailUrl": string}[];

const thunkCreator = (URL: string) => {
      return async (dispatch: any, n: number) => {
          let dataArr: TData = await fetch(URL).then(data => data.json());
          let test = getPhoto(dataArr[n].url)
          dispatch({
              type: GET_PHOTO,
              payload: test,
          });
    }
}
export { inc, dec, async, getPhoto, thunkCreator }