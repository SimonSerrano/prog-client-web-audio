import React from 'react';
import './navbar.css';
import SidebarContext from '../../context/SidebarContext';

class Navbar extends React.Component {


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
                            <p>Michou</p>
                        </div>
                        <div className='grow xs6 margin'>
                            <span className='primary light'>
                                <i className="fas fa-user-circle big"></i>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Navbar;