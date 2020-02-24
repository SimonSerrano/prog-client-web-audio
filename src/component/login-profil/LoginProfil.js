import React from 'react';
import './login-profil.css';
import Cookies from 'js-cookie'
import LoginService from "../../utils/services/LoginService";


class LoginProfil extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
        }
    }

    render(){

        return (
            <div className="flex-container column  justify-center fill-height margin">
                <div className="xs12 fill-height justify-center align-center fill-width">
                    <h4>Votre profil</h4>
                    <div className="flex-container">
                        <img  src="http://www.nretnil.com/avatar/LawrenceEzekielAmos.png" alt="Avatar" className="avatar"/>
                        <span>Romain Giraudeau</span>
                    </div>
                    <div className="flex-container description">
                        <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a velit ipsum. Etiam maximus libero egestas massa blandit ultrices. Ut non mi nec sapien placerat feugiat ac sed erat. Cras dignissim mauris nec odio finibus viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec suscipit faucibus tellus. Nunc et ex dolor. Quisque placerat feugiat suscipit. Cras at mollis lectus, ut sagittis leo. Nulla facilisi. Mauris semper, lorem non maximus feugiat, risus lacus ullamcorper libero, quis convallis elit risus sit amet diam. Quisque elit tortor, posuere et tristique eget, consequat ultricies elit. Etiam egestas sit amet sem sit amet dignissim.</span>
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
        service.postLogin(this.state).then(
            response => {
                this.setState({name: '', version: '', description: '', error: ''});
                if ( response.status === 200 ) {
                    response.json().then( data => {
                        Cookies.set('access_token', data['token']);
                        Cookies.set('username',data['name']);
                        this.props.history.push('/add-plugin');

                    });




                } else {
                    throw new Error(response.error);
                }


            }

        )
        // .
    }

    _createAccount() { // a faire inshallah in a near future;
        this.props.history.push('/createAccount');
    }
}
export default LoginProfil;
