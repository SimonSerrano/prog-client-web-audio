import {API, PLUGINS_ROUTE} from '../../constants/constant';

class PluginsService {


    postPlugin({name, version, description}) {
        const headers = new Headers({'Content-Type': 'application/json', mode: 'no-cors'});
        const request = new Request(API+PLUGINS_ROUTE, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({name, version, description})
        });
        return fetch(request);
    }
}


export default PluginsService;