import React from 'react';
import './plugin-card.css';
import RouteContext from '../../context/RouteContext';
import { API, PLUGINS_ROUTE } from '../../constants/constant';

class PluginCard extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <RouteContext.Consumer>
                {
                    ({ toggleRoute }) => {
                        return (<div className='lg4 flex-container wrap' >
                            <div className='flex-container column plugin '>
                                <div className='title'>
                                    {this.props.plugin.name}
                                </div>
                                <div className='type'>
                                    {this.props.plugin.version}
                                </div>
                                <div className='img'>
                                    <img alt="plugins' icon" src={`${API + PLUGINS_ROUTE}/${this.props.plugin._id}/image`} />
                                </div>
                                <div className='foot'>
                                    <div className="btn" onClick={(e) => toggleRoute(undefined, this.props.plugin)}>Essayer</div>
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