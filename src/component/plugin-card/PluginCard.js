import React from 'react';
import './plugin-card.css';
import { API, PLUGINS_ROUTE } from '../../constants/constant';
import { Link } from 'react-router-dom';


class PluginCard extends React.Component {


    render() {

        return (
            <div className='flex-container column plugin justify-center align-center margin lg4'>
                <div className='title'>
                    {this.props.plugin.name}
                </div>
                <div className='type'>
                    {this.props.plugin.version}
                </div>
                <img className="margin" alt="plugins' icon" src={`${API + PLUGINS_ROUTE}/${this.props.plugin._id}/image`} />
                <div className='foot'>
                    <Link to={{
                        pathname: "/pluginView",
                        state: {
                            plugin: this.props.plugin
                        }
                    }}>
                        <div className="btn margin">Détails</div>

                    </Link>
                </div>

            </div>
        )
    }
}

export default PluginCard;