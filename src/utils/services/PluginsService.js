import {API, PLUGINS_ROUTE} from '../../constants/constant';

class PluginsService {


    postPlugin({ name, version, description, file }) {
        const headers = new Headers({ 'Content-Type': 'application/json', mode: 'no-cors' });
        const request = new Request(API + PLUGINS_ROUTE, {
            method: 'POST',
            headers: headers,
            
            body: JSON.stringify({ name, version, description,file}),
            file: file
        });
        return fetch(request);
    }

    getPluginMetadata(baseUrl) {
        fetch(`${baseUrl}/main.json`)
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
                return err;
            });
    
    }

    
    async getPlugins() {
        const headers = new Headers({ 'Content-Type': 'application/json', mode: 'no-cors' });
        const request = new Request(API + PLUGINS_ROUTE, {
            method: 'GET',
            headers: headers
        });
       
        return fetch(request).then( res =>{ return res.json()});
    }

    deletePlugin(pluginId) {
        const headers = new Headers({ 'Content-Type': 'application/json', mode: 'no-cors' });
        const request = new Request(API + PLUGINS_ROUTE + "/" + pluginId, {
            method: 'DELETE',
            headers: headers
        });
        return fetch(request);
    }
}


export default PluginsService;