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

    loadPlugin(audioContext, baseUrl) {
        return new Promise((resolve, reject) => {
            const tag = document.createElement('script');
            tag.src = `${baseUrl}/main.js`;
            tag.onload = async () => {
                const service = new PluginsService();
                try {
                    const metadata = await service.getPluginMetadata(baseUrl);
                    if (metadata) {
                        const className = metadata.vendor + metadata.name;
                        resolve(new window[className](audioContext, baseUrl));
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
}


export default ScriptLoader;