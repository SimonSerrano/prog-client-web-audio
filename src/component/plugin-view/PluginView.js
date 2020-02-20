import React from 'react';
import './plugin-view.css';
import '../../styles/buttons.css';
import img from './image.jpg'
import WebAudio from '../webaudio/WebAudio';
import PluginsService from '../../utils/services/PluginsService';
import CommentList from '../comment-list/CommentList';
import PluginCommentForm from '../plugin-comment-form/PluginCommentForm';
import RouteContext from '../../context/RouteContext';

class PluginView extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <RouteContext.Consumer>{
                ({ toggleRoute }) => {
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

                                <div className="description_body">
                                    {this.props.plugin.description}
                                </div>
                            </div>
                            <div className="footer_buttons">
                                <div className="btn" onClick={(e) => {
                                    this._deletePlugin(this.props.plugin._id).then(
                                        toggleRoute(undefined, undefined))}}> Supprimer
                                </div>
                            </div>
                            <PluginCommentForm pluginId={this.props.plugin._id}></PluginCommentForm>
                            {
                                this.props.plugin.comments ?
                                <CommentList comments={this.props.plugin.comments}></CommentList>
                                :<div></div>
                            }
                        </div>
                    )
                }}
            </RouteContext.Consumer>
        );
    }
    _deletePlugin(id) {
        return new Promise((resolve,reject)=>{
            const pluginsService = new PluginsService();
            pluginsService.deletePlugin(id).then(
                (res) => {
                    if(res.ok){
                        resolve()
                    } else{
                        reject()
                    }
                }
            );
        })

    }
}

export default PluginView;