import React from 'react';
import ScriptLoader from '../../utils/loader/ScriptLoader';
import Spinner from '../spinner/Spinner';



class WebAudio extends React.Component {




    constructor(props) {
        super(props);
        this.state = {
            error: null,
            source: null,
            audioContext: new (window.AudioContext || window.webkitAudioContext)(),
            oscillator: null,
            isStarted: false
        };
    }

    render() {
        return (
            <div ref={this.buttonRef} className="flex-container column">
                {
                    this.renderButton()
                }
                <div id='WAP'>

                </div>
            </div>
        );
    }

    renderButton() {
        if (this.state.error) {
            return (
                <>
                    <div className="btn disabled" onClick={(e) => this._onPlay()}>Essayer
                    </div>
                    <div>{this.state.error.message}</div>
                </>
            );
        }
        else if (this.state.plugin) {
            return (<div className="btn" onClick={(e) => this._onPlay()}>Essayer
            </div>);
        } else {
            return (
                <Spinner></Spinner>
            );
        }
    }



    async componentWillUnmount() {
        if (this.state.plugin) {
            const scriptLoader = new ScriptLoader();
            scriptLoader.removeSDK();
            scriptLoader.removePlugin(this.props.baseUrl);
            await this.state.audioContext.close();
        }

    }


    async componentDidMount() {
        if (this.props.baseUrl) {
            // this.buttonRef.current.addEventListener('keydown', this._keyDownListener.bind(this));
            // this.buttonRef.current.addEventListener('keyup', this._keyUpListener.bind(this));


            const scriptLoader = new ScriptLoader();
            try {
                await scriptLoader.loadSDK()
                const plugin = await scriptLoader
                    .loadPlugin(this.state.audioContext, this.props.baseUrl);
                if (plugin) {
                    this.setState({ plugin: plugin });
                }
            } catch (err) {
                console.log(err);
                this.setState({ error: err });
            }
        }
    }



    async _onPlay() {
        if (navigator.requestMIDIAccess) {
            console.log("Midi working");
            try {
                const midiAccess = await navigator.requestMIDIAccess();
                if (midiAccess) {
                    this._onMidiAccess(midiAccess);
                }
            } catch (err) {
                console.log(err);
                this.setState({ error: err });
            }
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

    async _onMidiAccess(res) {
        if (!this.state.oscillator) {
            const oscillator = this.state.audioContext.createOscillator();
            this.setState({ oscillator: oscillator });
        }
        try {
            const node = await this.state.plugin.load();
            if (node) {
                this.state.oscillator.connect(node);
                node.connect(this.state.audioContext.destination);
                const el = await this.state.plugin.loadGui();
                this.props.guiCallback(el);
                for (const input of res.inputs.values()) {
                    input.onmidimessage = this._onMidiMessage.bind(this);
                }
            }
        } catch (err) {
            console.log(err);
            this.setState({ error: err });
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

export default WebAudio;
