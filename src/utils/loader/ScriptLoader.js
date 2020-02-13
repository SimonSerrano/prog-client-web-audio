import PluginsService from "../services/PluginsService";

class ScriptLoader {

    loadSDK() {
        return new Promise((resolve, reject) => {
            const sdkPath = `https://combinatronics.com/micbuffa/WebAudioPlugins/master/sdk/WebAudioSDK.js`;
            const tag = document.createElement('script');
            tag.src = sdkPath;
            tag.onload = resolve();
            tag.onerror = reject(new Error("SDK cannot be loaded."));
            document.getElementsByTagName('body')[0].appendChild(tag);
        });
    }

    loadPlugin(audioContext, baseUrl) {
        return new Promise((resolve, reject) => {
            const tag = document.createElement('script');
            tag.src = `${baseUrl}/main.js`;
            tag.onload = async () => {
                const service = new PluginsService();
                try {
                    const metadata  = await service.getPluginMetadata(baseUrl);
                    if(metadata) {
                        const className = metadata.vendor + metadata.name;
                        resolve(new window[className](audioContext, baseUrl));
                    }
                }catch(err) {
                    reject(err);
                }
            };
            tag.onerror = reject(new Error("Plugin cannot be loaded."));
            document.getElementsByTagName('body')[0].appendChild(tag);
        });
    }
}


export default ScriptLoader;