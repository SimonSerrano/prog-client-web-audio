import React from 'react';
import './plugin-view.css';
import '../../styles/buttons.css';
import WebAudio from '../webaudio/WebAudio';
import { API, PLUGINS_ROUTE } from '../../constants/constant';


class PluginView extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <div className="title">{this.props.plugin.name}</div>
                    <WebAudio></WebAudio>
                </div>
                <div className="card">
                    <img alt="Plugin" src={`${API + PLUGINS_ROUTE}/${this.props.plugin._id}/image`} height="20%" width="20%" />
                    <div className="card_items">
                        <div className="card_item">
                            <div className="subtitle">
                                Autheur :
                                </div>
                            <div className="inside">
                                Marmousoft
                                </div>
                        </div>
                        <div className="card_item">
                            <div className="subtitle">
                                Type :
                        </div>
                            <div className="inside">
                                wo
                        </div>
                        </div>
                        <div className="card_item">
                            <div className="subtitle">
                                Labels :
                        </div>
                            <div className="labels">
                                <li>ceci</li>
                                <li>est</li>
                                <li>un</li>
                                <li>plugin</li>
                                <li>ouai</li>
                                <li>gros</li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">

                    <div className="description_body">
                        {this.props.plugin.description}
                        </div>
                </div>
            </div>
        );
    }
}

export default PluginView;