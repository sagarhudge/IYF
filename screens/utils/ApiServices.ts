import { LocaleStorage } from "./LocaleStorage";

async function postData(url: string, payload: any) {

    return '';
    // return fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',

    //     },
    //     body: JSON.stringify(payload),
    // }).then((response: any) => response).catch(e => e);
}

export const ApiService = {
    postData,

}
