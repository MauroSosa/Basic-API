import { ResponseAPI } from '@interface/reponse';

export function formatResponse(data: Array<any> = [], err = [], msg = ''): ResponseAPI {
    const response = { data, err, msg };
    return response;
}

export function toJson(data: any) {
    return JSON.parse(JSON.stringify(data));
}

export function To(promise: any) {
    return promise
      .then((data: any) => {
        return [null, data];
      })
      .catch((err: any) => {
        console.log(err);
        return [err];
      });
  }