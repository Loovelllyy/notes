import { getPhoto } from "./actions";

type TData = {"albumId": number, 'id': number, 'title': string, 'url': string, "thumbnailUrl": string}[];

const thunkCreator = (URL: string) => {
      return async (dispatch: any, n: number) => {
          let dataArr: TData = await fetch(URL).then(data => data.json());
          dispatch(getPhoto(dataArr[n].url));
    }
}
export {  thunkCreator }