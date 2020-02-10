import React from 'react';
import ScriptLoader from '../../utils/loader/ScriptLoader';



class WebAudio extends React.Component {


    emulatedKeys = {
        a: 60,
        z: 62,
        e: 64,
        r: 65,
        t: 67,
        y: 69,
        u: 71,
        i: 72,
    }


    constructor(props) {
        super(props);
        this.state = {
            source: null,
            audioContext: new (window.AudioContext || window.webkitAudioContext)(),
            oscillator: null,
            isStarted: false,
            plugin: null
        }
        document.addEventListener('keydown', (e) => {
            if (this.emulatedKeys.hasOwnProperty(e.key)) {
                this._noteOn(this.emulatedKeys[e.key]);
            }
        });
        document.addEventListener('keyup', (e) => {
            if (this.emulatedKeys.hasOwnProperty(e.key)) {
                this._noteOff();
            }
        })

        const loader = new ScriptLoader([
            { url: `https://combinatronics.com/micbuffa/WebAudioPlugins/master/sdk/WebAudioSDK.js`, onLoad: null },
            { url: `https://combinatronics.com/micbuffa/WebAudioPlugins/master/plugins/PureJS/PingPongDelay/main.js`, onLoad: this._instantiate.bind(this) },
        ]);
        loader.load();
    }

    render() {
        return (
            <>
                <div className="btn" onClick={(e) => this._onPlay()}>Essayer
                </div>
                <div id='WAP'>

                </div>
            </>
        );
    }

    _instantiate() {
        fetch("https://combinatronics.com/micbuffa/WebAudioPlugins/master/plugins/PureJS/PingPongDelay/main.json")
            .then(response => {
                return response.json();
            })
            .then(metadata => {
                console.log(metadata);
                const className = metadata.vendor + metadata.name;
                this.setState((state, props) => ({
                    plugin: new window[className](state.audioContext, "https://combinatronics.com/micbuffa/WebAudioPlugins/master/plugins/PureJS/PingPongDelay/")
                }));
            });
    }

    async _onPlay() {
        console.log(this.state.plugin);
        if (navigator.requestMIDIAccess) {
            console.log("Midi working");
            navigator.requestMIDIAccess().then(res => this._onMidiAccess(res)).catch(err => console.log(err));
        }
        else {
            navigator.getUserMedia({ audio: true }, this._onUserMedia.bind(this), (err) => console.log(err));
        }
    }

    _onUserMedia(flux) {
        const source = this.state.audioContext.createMediaStreamSource(flux);
        var compressor = this.state.audioContext.createDynamicsCompressor();
        compressor.threshold.value = -50;
        compressor.knee.value = 40;
        compressor.ratio.value = 12;
        compressor.attack.value = 0;
        compressor.release.value = 0.25;
        source.connect(compressor);
        compressor.connect(this.state.audioContext.destination);
    }

    _onMidiAccess(res) {
        if (!this.state.oscillator) {
            const oscillator = this.state.audioContext.createOscillator();
            this.setState({ oscillator: oscillator });
        }
        this.state.plugin.load().then(async node => {
            const el = await this.state.plugin.loadGui();
            document.querySelectorAll('#WAP')[0].appendChild(el);
            this.state.oscillator.connect(node);
            node.connect(this.state.audioContext.destination);
        });
        for (const input of res.inputs.values()) {
            input.onmidimessage = this._onMidiMessage.bind(this);
        }
    }

    _onMidiMessage(message) {
        const [command, note, velocity] = message.data;
        if (command === 145) {
            this._noteOn(note);
        } else if (command === 129) {
            this._noteOff();
        }
    }

    _noteOn(note) {
        if (this.state.oscillator) {
            this.state.oscillator.frequency.setTargetAtTime(Math.pow(2, (note - 69) / 12) * 440, this.state.audioContext.currentTime, 0);
            this.state.oscillator.connect(this.state.audioContext.destination);
            if (!this.state.isStarted) {
                this.state.oscillator.start(0);
                this.setState({ isStarted: true });
            } else {
                this.state.audioContext.resume();
            }
        }
    }

    _noteOff() {
        this.state.audioContext.suspend();
    }

}

WebAudio.defaultProps = {
    emulatedKeys: {
        a: 60,
        z: 62,
        e: 64,
        r: 65,
        t: 67,
        y: 69,
        u: 71,
        i: 72,
    }
}

export default WebAudio;