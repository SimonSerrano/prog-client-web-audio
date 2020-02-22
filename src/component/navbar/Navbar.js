import React from 'react';
import './navbar.css';
import SidebarContext from '../../context/SidebarContext';
import Cookies from "js-cookie";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.name = Cookies.get('username');
    }


    render() {
        return (
            <div className="navbar primary dark flex-container space-between nowrap center">

                <div className='grow xs6 margin'>
                    <SidebarContext.Consumer>
                        {
                            (({ open, toggleSidebar }) => (
                                <span className='primary light' onClick={toggleSidebar}>
                                    <i className="fas fa-bars big"></i>
                                </span>
                            ))
                        }
                    </SidebarContext.Consumer>
                </div>
                <div className='grow col xs6 margin'>
                    <div className='flex-container justify-right center nowrap'>
                        <div className='grow xs6'>
                            <p>{this.name}</p>
                        </div>
                        <div className='grow xs6 margin'>
                            <span className='primary light'>
                                  <Link to="/login">
                                    <i className="fas fa-sign-out-alt" onClick={(e) => { Cookies.set('access_token', );
                                        Cookies.set('username','');} }>

                                    </i>
                                </Link>


                            </span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Navbar;
