import React from 'react';
import './plugin-card.css';
import { API, PLUGINS_ROUTE } from '../../constants/constant';
import { Link } from 'react-router-dom';


class PluginCard extends React.Component {


    render() {

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
                    <Link to={{
                        pathname: "/pluginView",
                        state: {
                            plugin: this.props.plugin
                        }
                    }}>
                        <div className="btn">Essayer</div>

                    </Link>
                </div>

            </div>
        </div>)
    }
}

export default PluginCard;