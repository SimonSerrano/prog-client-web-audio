import React from 'react';

class Sidebar extends React.Component {

    render() {
        return (
            <div className="sidebar primary flex-container column">

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
        );
    }
}

export default Sidebar;