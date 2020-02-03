import React from 'react';
import './plugin-list.css';
import Spinner from '../spinner/Spinner';
import PluginCard from '../plugin-card/PluginCard';

class PluginList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{title: "Titre de plugin", type:"CEci est un type", review: 3},
            {title: "Titre de plugin 2", type:"Ceci est un type", review: 3},
            {title: "Titre de plugin 3", type:"Ceci est un type", review: 4},
            {title: "Titre de plugin 4", type:"Ceci est un type", review: 2},
            {title: "Titre de plugin 5", type:"Ceci est un type", review: 3},
            {title: "Titre de plugin 6", type:"Ceci est un type", review: 1}]
        }
    }


    render() {
        return (
            <>
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
            </>
        );
    }
}

export default PluginList;