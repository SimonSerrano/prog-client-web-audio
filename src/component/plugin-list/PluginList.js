import React from 'react';
import './plugin-list.css';
import Spinner from '../spinner/Spinner';
import PluginCard from '../plugin-card/PluginCard';
import PluginsService from '../../utils/services/PluginsService';

class PluginList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
        this._getData().then( plugins => {
            this.setState({data: plugins});
        });
    }

    async _getData() {
        const service = new PluginsService();
        const plugins =  await service.getPlugins();
        return plugins;
    }

    render() {
        return (
            <div className='wrapper'>
                {
                    this.state.data ? this.state.data.length ?
                        <div className="flex-container align-start wrap">
                            {this.state.data.map((plugin, index) => {
                                return (<PluginCard key={index} plugin={plugin}></PluginCard>);
                            })}
                        </div>
                        :
                        <div className="flex-container center justify-center">
                            <div className="col xs12">
                                <p>Aucuns plugins trouvé</p>
                            </div>
                        </div>
                        :
                        <div className="flex-container fill-height justify-center center margin">
                            <div className="xs12 margin">
                                <Spinner/>
                            </div>
                        </div>
                }
           </div>
        );
    }
}

export default PluginList;