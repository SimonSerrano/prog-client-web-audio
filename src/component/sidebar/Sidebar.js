import React from 'react';
import './sidebar.css';
import '../../styles/buttons.css';
import SidebarContext from '../../context/SidebarContext';
import RouteContext from '../../context/RouteContext';
import { ADD_PLUGIN, HOME } from '../../constants/routes';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {

    render() {
        return (
            <SidebarContext.Consumer>
                {
                    (({ open, toggleSidebar }) => (
                        <div className={`sidebar ${open ? 'open' : 'close'} primary flex-container column`}>

                            <RouteContext.Consumer>
                                {
                                    ({ toggleRoute }) => {
                                        return (
                                            <>
                                                <div className="grow col xs12">
                                                    <Link to="/home">
                                                        <div className="btn flat" onClick={(e) => { toggleRoute(HOME); toggleSidebar(false) }}>
                                                            Accueil
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className='grow col xs12'>
                                                    <Link to="/add-plugin">
                                                        <div className="btn flat" onClick={(e) => { toggleRoute(ADD_PLUGIN); toggleSidebar(false) }}>
                                                            Ajouter un plugin
                                                        </div>
                                                    </Link>
                                                </div>
                                            </>
                                        );
                                    }
                                }
                            </RouteContext.Consumer>


                        </div>
                    ))
                }
            </SidebarContext.Consumer>
        );
    }
}

export default Sidebar;