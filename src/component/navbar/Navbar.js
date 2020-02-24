import React from 'react';
import './navbar.css';
import SidebarContext from '../../context/SidebarContext';
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Spinner from '../spinner/Spinner.js';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.name = Cookies.get('username');
    }


    render() {
        return (
            <div className="navbar primary dark ">
                <div className="navbar_margin flex-container space-between center">
                    <SidebarContext.Consumer>
                        {
                            (({ open, toggleSidebar }) => (
                                <span className='logo primary light flex-container row' onClick={toggleSidebar}>
                                    <Spinner></Spinner>
                                    <div className="app_title">PolyAudio</div>
                                </span>
                            ))
                        }
                    </SidebarContext.Consumer>
                    <div className='username flex-container justify-right center '>
                        <p>{this.name}</p>
                        <span className='primary light'>
                            <Link to="/login">
                                <i className="fas fa-sign-out-alt" onClick={(e) => {
                                    Cookies.set('access_token');
                                    Cookies.set('username', '');
                                }}>

                                </i>
                            </Link>

                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;
