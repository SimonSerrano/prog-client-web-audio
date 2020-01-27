import React from 'react';
import './sidebar.css';
import '../../styles/buttons.css';
import SidebarContext from '../context/SidebarContext';

class Sidebar extends React.Component {

    render() {
        return (
            <SidebarContext.Consumer>
                {
                    (({ open, toggleSidebar }) => (
                        <div className={`sidebar ${open ? 'open' : 'close'} primary flex-container column`}>

                            <div className="grow col xs12">
                                <div className="btn flat">
                                    Accueil
                                </div>
                            </div>
                            <div className='grow col xs12'>
                                <div className="btn flat">
                                    Ajouter un plugin
                                </div>
                            </div>

                        </div>
                    ))
                }
            </SidebarContext.Consumer>
        );
    }
}

export default Sidebar;