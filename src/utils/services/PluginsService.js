import {API, LOGIN_ROUTE} from '../../constants/constant';

class PluginsService {
    postLogin({name,password}) {
        const headers = new Headers({'Content-Type': 'application/json', mode: 'no-cors'});
        const request = new Request(API+LOGIN_ROUTE, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({name, password})
        });
        return fetch(request);
    }
}


export default PluginsService;
