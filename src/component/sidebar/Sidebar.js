import React from 'react';
import './sidebar.css';
import '../../styles/buttons.css';
import SidebarContext from '../../context/SidebarContext';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

    render() {
        return (
            <SidebarContext.Consumer>
                {
                    (({ open, toggleSidebar }) => (
                        <div className={`sidebar ${open ? 'open' : 'close'} primary flex-container column`}>


                            <>
                                <div className="grow col xs12">
                                    <Link to="/home">
                                        <div className="btn flat" onClick={(e) => { toggleSidebar(false) }}>
                                            Accueil
                                                        </div>
                                    </Link>
                                </div>
                                <div className='grow col xs12'>
                                    <Link to="/add-plugin">
                                        <div className="btn flat" onClick={(e) => { toggleSidebar(false) }}>
                                            Ajouter un plugin
                                                        </div>
                                    </Link>
                                </div>
                            </>


                        </div>
                    ))
                }
            </SidebarContext.Consumer>
        );
    }
}

export default Sidebar;