import React from 'react';
import './plugin-list.css';
import Spinner from '../spinner/Spinner';

class PluginList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
        }
    }


    render() {
        return (
            <>
                {
                    this.state.data ? this.state.data.length ?
                        <div className="flex-container align-start space-evenly">
                            {this.state.data.map((plugin, index) => {
                                return (<p></p>);
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