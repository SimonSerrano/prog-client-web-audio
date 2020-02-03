import React from 'react';
import './layout.css';
import RouteContext from '../../context/RouteContext';


class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            route: 'home',
            toggleRoute: (route) => {
                this.setState({route: route});
            }
        }
    }
    

    render() {
        return (
            <div className='container'>
                <RouteContext.Provider value={this.state}>
                    {this.props.children}
                </RouteContext.Provider>
            </div>
        )
    }
}

export default Layout;