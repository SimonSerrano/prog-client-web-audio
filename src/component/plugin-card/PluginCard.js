import React from 'react';
import './plugin-card.css';
import RouteContext from '../../context/RouteContext';

class PluginCard extends React.Component {

    render() {
        return (
            <RouteContext.Consumer>
                {
                    ({toggleRoute}) => {
                        return (<div className='lg4 flex-container margin' onClick={(e) => toggleRoute(undefined, {})}>
                        <div className='flex-container column primary light fill border-radius'>
                            <div className='flex-container justify-center margin'>
                                {this.props.plugin.title}
                            </div>
                            <div className='flex-container plugin image justify-center'>
                                <img alt="plugins' icon" src={"logo192.png"} />
                            </div>
                            <div className='flex-container justify-center'>
                                Catégorie : {this.props.plugin.type}
                            </div>
                            <div className='flex-container justify-center'>
                                Review : {this.props.plugin.review}
                            </div>
                        </div>
                    </div>)
                    }
                }
            </RouteContext.Consumer>
        );
    }
}

export default PluginCard;