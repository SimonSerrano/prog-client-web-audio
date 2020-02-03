import React from 'react';
import './plugin-view.css';
import '../../styles/buttons.css';
import img from './image.jpg'

class PluginView extends React.Component {

    render() {
        return ( 
        <div class="wrapper">
            <div class="header">
            <div class="title">Je suis un plugin</div>
            <div className="btn button" type="submit" value="Submit" onClick={(e)=>console.log(e)}>Fermer sa gueule le plugin</div>

            </div>
            <div class="card">
                <img src={img} height="20%" width="20%"/>
                <div class="card_items">
                    <div class="card_item">
                        <div class="subtitle">
                            Autheur :
                        </div>
                        <div class="inside">
                            Marmousoft
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="subtitle">
                            Type :
                        </div>
                        <div class="inside">
                            wo
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="subtitle">
                            Labels :
                        </div>
                        <div class="labels">
                        <li>ceci</li>
                        <li>est</li>
                        <li>un</li>
                        <li>plugin</li>
                        <li>ouai</li>
                        <li>gros</li>
                    </div>
                    </div>
                </div>
            </div>
            <div class="description">

                <div class="description_body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>        
        );
    }
}

export default PluginView;