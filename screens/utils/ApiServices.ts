import APIResponseParser from "./APIResponseParser";

export const Base_URL = "https://iyfestival-eea51.el.r.appspot.com/";

async function postData(url: string, payload: any) {


    console.log('Base_URL', Base_URL + url)
    return fetch(Base_URL + url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    }).then((response: any) => APIResponseParser.handleResponse(response)).catch(e => e);
}

async function getData(url: string) {

    return fetch(Base_URL + url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',

        },
    }).then((response: any) => APIResponseParser.handleResponse(response)).catch(e => e);
}

async function updateData(url: string, payload: any, token: string) {

    return fetch(Base_URL + url, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify(payload),
    }).then((response: any) => APIResponseParser.handleResponse(response)).catch(e => e);
}




export const ApiService = {
    postData, getData, updateData

}
