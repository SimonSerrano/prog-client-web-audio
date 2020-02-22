import React from 'react';
import './login-creation.css';
import Cookies from 'js-cookie'
import LoginService from "../../utils/services/LoginService";
import { useHistory } from "react-router-dom";


class LoginCreation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
        }
    }

    render(){

        return (
            <div className="flex-container column justify-center align-center fill-height margin">
                <div className="xs12 fill-height">
                    <h4>Creation de votre compte</h4>
                </div>
                <div className="xs12 fill-height" style={{width: '25%'}}>
                    <form name='pluginForm'>
                        <div className="input-container input-margin">
                            <input type="text" id="username" name="username" required value={this.state.name}
                                   onChange={(e) => this._nameChange(e)} />
                            <label htmlFor="username">user name</label>
                        </div>
                        <div className="input-container input-margin">
                            <input type="password" id="password" name="password" required value={this.state.password}
                                   onChange={(e) => this._passwordChange(e)} />
                            <label htmlFor="password">mot de passe</label>
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
                        <div className="xs12">
                            <div className="btn" type="submit" value="Submit" onClick={(e) => this._createAccount()}>creer  </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

    _nameChange(e) {
        console.log(e);
        this.setState({ name: e.target.value });
    }

    _passwordChange(e) {
        this.setState({ password: e.target.value });
    }
    _submit() {
        if (!this.state.name) {
            this.setState({error: 'Nom manquant'});
            return;
        }
        if (!this.state.password) {
            this.setState({error: 'password manquant'});
            return;
        }

        // TODO send data to backend
        const service = new LoginService();
        service.create_account(this.state).then(
            response => {
                if ( response.status === 200 ) {
                    this.props.history.push('/login');
                }


            }

        )
        // .
    }

    _createAccount() { // a faire inshallah in a near future;

    }
}
export default LoginCreation;
