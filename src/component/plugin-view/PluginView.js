import React from 'react';
import './plugin-view.css';
import '../../styles/buttons.css';
import img from './image.jpg'
import WebAudio from '../webaudio/WebAudio';
import PluginsService from '../../utils/services/PluginsService';
import CommentList from '../comment-list/CommentList';
import PluginCommentForm from '../plugin-comment-form/PluginCommentForm';

class PluginView extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="wrapper">
                <div className="header">
                    <div className="title">{this.props.plugin.name}</div>
                    <WebAudio></WebAudio>
                </div>
                <div className="card">
                    <img alt="Plugin" src={img} height="20%" width="20%" />
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                </div>
                <div className="footer_buttons">
                    <div className="btn" onClick={() => this._deletePlugin(this.props.plugin._id)}>
                        Supprimer
                        </div>
                </div>
                <PluginCommentForm pluginId={this.props.plugin._id}></PluginCommentForm>
                {
                    this.props.plugin.comments ?
                    <CommentList comments={this.props.plugin.comments}></CommentList>
                    :<div></div>
                }
            </div>
        );
    }
    _deletePlugin(id){
        console.log("la");
        const pluginsService=new PluginsService();
        pluginsService.deletePlugin(id).then(
            (res)=>console.log(res)
        );
    }
}

export default PluginView;