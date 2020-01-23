import React from 'react';
import './layout.css';


class Layout extends React.Component {
    

    render() {
        return (
            <div className='container'>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;