import { LocaleStorage } from "./LocaleStorage";

export const Base_URL = "";



async function postData(url: string, payload: any) {

    return fetch(Base_URL + url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(payload),
    }).then((response: any) => response).catch(e => e);
}

async function getData(url: string) {

    return fetch(Base_URL + url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',

        },
    }).then((response: any) => response).catch(e => e);
}

async function updateData(url: string, payload: any) {

    return fetch(Base_URL + url, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(payload),
    }).then((response: any) => response).catch(e => e);
}




export const ApiService = {
    postData, getData,updateData

}
