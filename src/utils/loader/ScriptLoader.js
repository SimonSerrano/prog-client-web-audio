class ScriptLoader {

    constructor(scripts) {
        this.scripts = scripts;
    }

    load() {
        this.scripts.forEach(script => {
            const tag = document.createElement('script');
            tag.src = script.url;
            tag.onload = script.onLoad;
            document.getElementsByTagName('body')[0].appendChild(tag);
        });
    }
}


export default ScriptLoader;