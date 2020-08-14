import axios from 'axios'

const _GET_ = 'GET'
const _POST_ = 'POST'
const _PUT_ = 'PUT'
const _DELETE_ = 'DELETE'

const MIME_TYPE = 'application/ld+json';


export default class ApiConfig {


  static getHeaderToken(token) {
    return {
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': token
    }
  }

  static post (url, body, headers = null) {
    return this.action(url, "POST", null, body)
  }


  static action (url, method, headers = null, body = null, params = null) {
    if (!headers) {
      headers = {
        'Access-Control-Allow-Origin':'*'
      }
    }

    if (!headers.hasOwnProperty('Accept')) {
        headers = {...headers, 'Accept': MIME_TYPE};
      }
      if (!headers.hasOwnProperty("Access-Control-Allow-Origin")) {
        headers = { ...headers, 'Access-Control-Allow-Origin': '*' };
      }

      if (
        undefined !== body &&
        !(body instanceof FormData) &&
        !headers.hasOwnProperty('Content-Type')
      ) {
        headers = {...headers, 'Content-Type': MIME_TYPE};
      }

    const config = {
      method: method,
      url: url,
      params: params,
      data: body,
      headers: headers
    };

    return axios(config)
  }

}

  // TODO maybe i will have to move it
  // parseID(id: string): string {
  //   let splitedId = id.split('/');
  //
  //   return splitedId[splitedId.length - 1];
  // }

  // TODO check on 401 is still logged
