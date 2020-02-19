import React from 'react';
import '../../styles/buttons.css';
import '../../styles/inputs.css';
import './plugin-form.css';
import PluginsService from '../../utils/services/PluginsService';

class PluginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            version: '',
            description: '',
            error: '',
            image: '',
            zip: '',
        }
    }


    render() {
        return (
            <div className="flex-container column justify-center align-center fill-height margin">
                <div className="xs12 fill-height">
                    <h4>Ajouter un plugin</h4>
                </div>
                <div className="xs12 fill-height" style={{ width: '75%' }}>
                    <form name='pluginForm'>

                        <div className="input-container input-margin">
                            <input type="text" id="pluginName" name="pluginName" required value={this.state.name}
                                onChange={(e) => this._nameChange(e)} />
                            <label htmlFor="pluginName">Nom du plugin</label>
                        </div>
                        <div className="input-container input-margin">
                            <input type="text" id="pluginVersion" name="pluginVersion" required value={this.state.version}
                                onChange={(e) => this._versionChange(e)} />
                            <label htmlFor="pluginVersion">Version du plugin</label>
                        </div>
                        <div className="input-container input-margin">
                            <input type="textarea" id="pluginDescription" name="pluginDescription" required value={this.state.description}
                                onChange={(e) => this._descriptionChange(e)} />
                            <label htmlFor="pluginDescription">Description du plugin</label>
                        </div>
                        <div className={`input-container input-margin ${this.state.image ? 'active' : ''}`}>
                            <input name="pluginImage" value={this.state.image?.name} type='text' readOnly required />
                            <label htmlFor="pluginImage">Image du plugin</label>
                            <input id="pluginImage" accept=".jpg,.png" style={{ display: 'none' }} type="file" onChange={this._imageChangedHandler} />
                        </div>
                        <div className={`input-container input-margin ${this.state.zip ? 'active' : ''}`}>
                            <input name="pluginZip" value={this.state.zip?.name} type='text' readOnly required />
                            <label htmlFor="pluginZip">Zip du plugin</label>
                            <input id="pluginZip" accept=".zip, .rar" style={{ display: 'none' }} type="file" onChange={this._zipChangedHandler} />
                        </div>
                    </form>

                    <div className="flex-container space-between align-center">
                        <div className="xs12">
                            {this.state.error ?

                                <p style={{ color: 'red' }}>{this.state.error}</p>

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

    _zipChangedHandler = (e) => {
        const file = e.target.files[0];
        this.setState({zip: file});

    }

    _imageChangedHandler = (e) => {
        const file = e.target.files[0]
        this.setState({ image: file });
    }

    _nameChange(e) {
        this.setState({ name: e.target.value });
    }

    _versionChange(e) {
        this.setState({ version: e.target.value });
    }

    _descriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    _submit() {
        if (!this.state.name) {
            this.setState({ error: 'Nom manquant' });
            return;
        }
        if (!this.state.version) {
            this.setState({ error: 'Version manquante' });
            return;
        }
        if (!this.state.description) {
            this.setState({ error: 'Description manquante' });
            return;
        }
        if(!this.state.image) {
            this.setState({error: 'Image manquante'});
            return;
        }
        if(!this.state.zip) {
            this.setState({error: 'Zip manquant'});
            return;
        }
        const service = new PluginsService();
        service.postPlugin(this.state).then(res => {
            this.setState({ name: '', version: '', description: '', error: '', image: '', zip: '' });
        }).catch(err => {
            console.log(err);
        });
    }
}

export default PluginForm;