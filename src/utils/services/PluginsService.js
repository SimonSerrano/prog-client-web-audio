import { API, PLUGINS_ROUTE } from '../../constants/constant';

class PluginsService {


    postPlugin({ name, version, description, image, zip }) {
        const headers = new Headers({ mode: 'no-cors', enctype: "multipart/form-data" });
        const form = new FormData();
        form.append("name", name);
        form.append("version", version);
        form.append("description", description);
        form.append("image", image);
        form.append("zip", zip);
        const request = new Request(API + PLUGINS_ROUTE, {
            method: 'POST',
            headers: headers,
            body: form,
        });
        return fetch(request);
    }

    async getPluginMetadata(baseUrl) {
        return fetch(`${baseUrl}/main.json`)
            .then(async response => {
                return await response.json();
            })
            .catch(err => {
                console.log(err);
                return err;
            });

    }

    async getPlugin(plugin) {
        const headers = new Headers({ 'Content-Type': 'application/json', mode: 'no-cors' });
        const request = new Request(API + PLUGINS_ROUTE + plugin._id, {
            method: 'GET',
            headers: headers
        });
        try{
            const response = await fetch(request);
            return response.json();
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    async getPluginCodeUrls(plugin) {
        const headers = new Headers({ 'Content-Type': 'application/json', mode: 'no-cors' });
        const request = new Request(API + PLUGINS_ROUTE +'/'+ plugin._id+'/plugin', {
            method: 'GET',
            headers: headers
        });
        try{
            const response = await fetch(request);
            return response.json();
        }catch(err){
            console.log(err);
            throw err;
        }
    }


    async getPlugins() {
        const headers = new Headers({ 'Content-Type': 'application/json', mode: 'no-cors' });
        const request = new Request(API + PLUGINS_ROUTE, {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(res => { return res.json() });
    }

    deletePlugin(pluginId) {
        const headers = new Headers({ 'Content-Type': 'application/json', mode: 'no-cors' });
        const request = new Request(API + PLUGINS_ROUTE + "/" + pluginId, {
            method: 'DELETE',
            headers: headers
        });
        return fetch(request);
    }


    postComment({ pluginId, author, text, rate }) {
        const headers = new Headers({ 'Content-Type': 'application/json', mode: 'no-cors' });
        const request = new Request(API + PLUGINS_ROUTE + "/" + pluginId + "/comments", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ author, text, rate })
        });
        return fetch(request);
    }
}


export default PluginsService;