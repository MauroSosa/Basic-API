import Rp from 'request-promise';
import { To } from '@utils/Functions';

export async function getUsers() {
    const uri = 'https://jsonplaceholder.typicode.com/users';
    const options = {
        method: 'GET',
        uri,
        headers: {
            'content-type': 'application/json'
        },
        json: true
    };
    return To(Rp(options));
}
