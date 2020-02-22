import React from 'react';
import './plugin-view.css';
import '../../styles/buttons.css';
import WebAudio from '../webaudio/WebAudio';
import { API, PLUGINS_ROUTE } from '../../constants/constant';

import PluginsService from '../../utils/services/PluginsService';
import CommentList from '../comment-list/CommentList';
import PluginCommentForm from '../plugin-comment-form/PluginCommentForm';
import RouteContext from '../../context/RouteContext';
import Spinner from '../spinner/Spinner';

class PluginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            baseUrl: ''
        };
        this._getPluginUrl();
    }

    render() {
        return (
            <RouteContext.Consumer>{
                ({ toggleRoute }) => {
                    return (
                        <div className="wrapper">
                            <div className="card">
                                <img alt="Plugin" src={`${API + PLUGINS_ROUTE}/${this.props.plugin._id}/image`} height="20%" width="20%" />
                                <div className="card_items">
                                    <div className="title">{this.props.plugin.name}</div>

                                    <div className="card_item">
                                        <div className="subtitle">
                                            Version :
                                </div>
                                        <div className="inside">
                                            {this.props.plugin.version}
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
                                <div className="description_title">
                                    Description :
                                </div>
                                <div className="description_body">
                                    {this.props.plugin.description}
                                </div>
                            </div>
                            <div className="footer_buttons">
                                <div>
                                    {
                                        this.state.baseUrl ?
                                            <WebAudio guiCallback={this._buildModal.bind(this)} baseUrl={this.state.baseUrl}></WebAudio>
                                            :
                                            <Spinner></Spinner>
                                    }
                                </div>

                                <div className="btn" onClick={(e) => {
                                    this._deletePlugin(this.props.plugin._id).then(
                                        toggleRoute(undefined, undefined))
                                }}> Supprimer
                                </div>
                            </div>
                            {
                                this.props.plugin.comments ?
                                    <CommentList comments={this.props.plugin.comments}></CommentList>
                                    : <div></div>
                            }
                            <PluginCommentForm pluginId={this.props.plugin._id}></PluginCommentForm>
                        </div>
                    )
                }}
            </RouteContext.Consumer>
        );
    }

    _buildModal(element) {
        document.querySelectorAll('.header')[0].appendChild(element);
    }

    async _getPluginUrl() {
        const service = new PluginsService();
        const json = await service.getPluginCodeUrls(this.props.plugin);
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