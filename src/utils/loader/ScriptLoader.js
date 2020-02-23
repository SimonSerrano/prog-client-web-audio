import PluginsService from "../services/PluginsService";
import { API, SDK_ROUTE } from '../../constants/constant';

class ScriptLoader {

    loadSDK() {
        return new Promise((resolve, reject) => {
            const sdkPath = API + SDK_ROUTE;
            const tag = document.createElement('script');
            tag.src = sdkPath;
            tag.async = true;
            tag.onload = () => {
                resolve();
            };
            tag.onerror = () => {
                reject(new Error("SDK cannot be loaded."));
            };
            document.head.appendChild(tag);
        });
    }

    removeSDK() {
        const sdkPath = API + SDK_ROUTE;
        const tag = document.querySelector(`script[src="${sdkPath}"]`);
        const head = document.querySelector('head');
        head.removeChild(tag);
    }

    loadPlugin(audioContext, baseUrl) {
        const url = API + baseUrl;
        return new Promise((resolve, reject) => {
            const tag = document.createElement('script');
            tag.src = `${url}/main.js`;
            tag.onload = async () => {
                const service = new PluginsService();
                try {
                    const metadata = await service.getPluginMetadata(url);
                    if (metadata) {
                        const className = metadata.vendor + metadata.name;
                        resolve(new window[className](audioContext, url));
                    }
                } catch (err) {
                    reject(err);
                }
            };
            tag.onerror = () => {
                reject(new Error("Plugin cannot be loaded."));
            };
            document.head.appendChild(tag);
        });
    }

    removePlugin(baseUrl) {
        const mainJSPath = API + baseUrl + "/main.js";
        const mainHTMLPath = API + baseUrl + "/main.html";
        const script = document.querySelector(`script[src="${mainJSPath}"]`);
        const gui = document.querySelector(`link[href="${mainHTMLPath}"]`);
        const head = document.querySelector('head');
        head.removeChild(script);
        if(gui) {
            head.removeChild(gui);
        }
    }
}


export default ScriptLoader;