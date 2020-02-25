import React from 'react';
import './plugin-view.css';
import '../../styles/buttons.css';
import WebAudio from '../webaudio/WebAudio';
import { API, PLUGINS_ROUTE } from '../../constants/constant';

import PluginsService from '../../utils/services/PluginsService';
import CommentList from '../comment-list/CommentList';
import PluginCommentForm from '../plugin-comment-form/PluginCommentForm';
import Spinner from '../spinner/Spinner';
import { Link } from 'react-router-dom';

class PluginView extends React.Component {

    plugin;
    componentRef;

    constructor(props) {
        super(props);
        this.state = {
            baseUrl: ''
        };
        this.plugin = props.location.state.plugin;
        this._getPluginUrl();
        this.componentRef = React.createRef();
    }

    render() {
        return (
            <div className="wrapper">
                <Link to={{
                    pathname: "/home",
                    state: {
                    }
                }}>
                    <div className="retour">
                        Retour

                        </div>
                </Link>
                <div ref={this.componentRef} className="close">
                    <div className={"modal-content"}>
                    <div className="btn" onClick={(e)=>this._closeModal()}>
                        fermer
                    </div>
                    </div>
                </div>
                <div className="card">
                    <img alt="Plugin" src={`${API + PLUGINS_ROUTE}/${this.plugin._id}/image`} height="20%" width="20%" />
                    <div className="card_items">
                        <div className="title">{this.plugin.name}</div>
                        <div className="card_subtitle">
                            Version :
                            </div>
                        <div className="inside">
                            {this.plugin.version}
                        </div>
                        <div className="card_subtitle">
                            Catégories :
                         </div>
                        <div className="labels">
                            {this.plugin.categories ?
                                this.plugin.categories.split(",").map((categorie) => {
                                    return (<li>{categorie}</li>)
                                }) : ""
                            }
                        </div>
                    </div>

                </div>
                <div className="footer_buttons">


                    <div className="btn" onClick={(e) => {
                        this._deletePlugin(this.plugin._id)
                    }}>
                        Supprimer
                </div>
                    <div>
                        {
                            this.state.baseUrl ?
                                <WebAudio guiCallback={this._openModal.bind(this)} baseUrl={this.state.baseUrl}></WebAudio>
                                :
                                <Spinner></Spinner>
                        }
                    </div>
                </div>
                <div className="description">
                    <div className="subtitle">
                        Description
                                </div>
                    <div className="description_body">
                        {this.plugin.description}
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

    _openModal(element) {
        this.componentRef.current.className = "open";
        //document.querySelectorAll('.close')[0].className="open";
        document.querySelectorAll('.modal-content')[0].appendChild(element);
    }
    _closeModal() {
        this.componentRef.current.className = "close";
        const element=this.componentRef.current.querySelector('.modal-content');
        element.removeChild(element.lastChild);
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
    _back() { }

}

export default PluginView;