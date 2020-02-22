import React from 'react';
import '../../styles/buttons.css';
import '../../styles/inputs.css';
import './plugin-comment-form.css';
import PluginsService from '../../utils/services/PluginsService';

class PluginCommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rate: '',
            text: '',
            error: ''
        }
    }


    render() {
        return (
            <div className="flex-container column justify-center align-center fill-height margin">
                <div className="xs12 fill-height">
                    <h4>Ajouter un commentaire</h4>
                </div>
                <div className="xs12 fill-height" style={{width: '75%'}}>
                    <form name='pluginCommentForm'>
                        <div className="input-container input-margin">
                            <input type="text" id="pluginAuthor" name="pluginAuthor" required value={this.state.author}
                                onChange={(e) => this._authorChange(e)} />
                            <label htmlFor="pluginAuthor">Auteur du commentaire</label>
                        </div>
                        <div className="input-container input-margin">
                            <input type="text" id="pluginRate" name="pluginRate" required value={this.state.rate}
                                onChange={(e) => this._rateChange(e)} />
                            <label htmlFor="pluginRate">Note du plugin</label>
                        </div>
                        <div className="input-container input-margin">
                            <input type="text" id="pluginComment" name="pluginComment" required value={this.state.text}
                                onChange={(e) => this._textChange(e)} />
                            <label htmlFor="pluginComment">Commentaire</label>
                        </div>
                    </form>

                    <div className="flex-container space-between align-center">
                        <div className="xs12">
                            {this.state.error ?
                                    <p style={{color: 'red'}}>{this.state.error}</p>
                                :
                                ''
                            }
                        </div>
                        <div className="xs12">
                            <div className="btn" type="submit" value="Submit" onClick={(e) => this._submit()}>Valider</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _authorChange(e) {
        this.setState({ author: e.target.value });
    }

    _rateChange(e) {
        this.setState({ rate: e.target.value });
    }

    _textChange(e) {
        this.setState({ text: e.target.value });
    }

    _submit() {
        if (!this.state.author) {
            this.setState({error: 'Author manquant'});
            return;
        }
        if(!this.state.rate) {
            this.setState({error: 'Note manquante'});
            return;
        }
        if(!this.state.text) {
            this.setState({error: 'Description manquante'});
            return;
        }
        const service = new PluginsService();
        const data = { 
            pluginId: this.props.pluginId,
            author: this.state.author,
            text: this.state.text, 
            rate: this.state.rate
        }
        service.postComment(data).then(res => {
            this.setState({author: '', rate: '', text: '', error: ''});
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
}

export default PluginCommentForm;