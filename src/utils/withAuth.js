import React, { Component } from 'react';
import Cookies from 'js-cookie'
import LoginForm from "../component/login-form/LoginForm";
export default function withAuth(ComponentToProtect) {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false,
            };
        }
        componentDidMount() {
            const myToken = Cookies.get('access_token'); // => 'value'
            fetch("http://localhost:10000/account/checkToken",{
                headers : {
                    'x-access-token' : myToken
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        this.setState({ loading: false });
                    } else {
                        const error = new Error(res.error);
                        throw error;
                    }
                })
                .catch(err => {
                    console.error(err);
                    this.setState({ loading: false, redirect: true });
                });
        }
        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            }
            if (redirect) {
                console.log("on est dedans");
                this.props.history.push('/login');
                return    <LoginForm/>;
            }
            return <ComponentToProtect {...this.props} />;
        }
    }
}
