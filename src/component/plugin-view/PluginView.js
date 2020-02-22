import React from 'react';
import './plugin-view.css';
import '../../styles/buttons.css';
import WebAudio from '../webaudio/WebAudio';
import { API, PLUGINS_ROUTE } from '../../constants/constant';

import PluginsService from '../../utils/services/PluginsService';
import CommentList from '../comment-list/CommentList';
import PluginCommentForm from '../plugin-comment-form/PluginCommentForm';
import Spinner from '../spinner/Spinner';

class PluginView extends React.Component {

    plugin;

    constructor(props) {
        super(props);
        this.state = {
            baseUrl: ''
        };
        this.plugin = props.location.state.plugin;
        this._getPluginUrl();
    }

    render() {
        
                    return (
                        <div className="wrapper">
                            <div className="card">
                                <img alt="Plugin" src={`${API + PLUGINS_ROUTE}/${this.plugin._id}/image`} height="20%" width="20%" />
                                <div className="card_items">
                                    <div className="title">{this.plugin.name}</div>

                                    <div className="card_item">
                                        <div className="subtitle">
                                            Version :
                                </div>
                                        <div className="inside">
                                            {this.plugin.version}
                                        </div>
                                    </div>
                                    <div className="card_item">
                                        <div className="subtitle">
                                            Catégories :
                                        </div>

                                        <div className="labels">
                                            <li>Distortion</li>
                                            <li>est</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <div className="description_title">
                                    Description :
                                </div>
                                <div className="description_body">
                                    {this.plugin.description}
                                </div>
                            </div>
                            <div className="footer_buttons">


                                <div className="btn" onClick={(e) => {
this._deletePlugin(this.plugin._id)}}> Supprimer

                                
                                </div>
                                <div>
                                    {
                                        this.state.baseUrl ?
                                            <WebAudio guiCallback={this._buildModal.bind(this)} baseUrl={this.state.baseUrl}></WebAudio>
                                            :
                                            <Spinner></Spinner>
                                    }
                                </div>
                            </div>
                            {
                                this.plugin.comments ?
                                    <CommentList comments={this.plugin.comments}></CommentList>
                                    : <div></div>

                            }
                            <PluginCommentForm pluginId={this.plugin._id}></PluginCommentForm>
                        </div>
                    );
    }

    _buildModal(element) {
        document.querySelectorAll('.description')[0].appendChild(element);
    }

    async _getPluginUrl() {
        const service = new PluginsService();
        const json = await service.getPluginCodeUrls(this.plugin);
        this.setState({ baseUrl: json.url });

    }

    _deletePlugin(id) {
        return new Promise((resolve, reject) => {
            const pluginsService = new PluginsService();
            pluginsService.deletePlugin(id).then(
                (res) => {
                    if (res.ok) {
                        resolve()
                    } else {
                        reject()
                    }
                }
            );
        })

    }
}

export default PluginView;