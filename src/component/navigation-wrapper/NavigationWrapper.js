import React from 'react';
import SidebarContext from '../../context/SidebarContext';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';



class NavigationWrapper extends React.Component {

    constructor(props) {
        super(props);

        this.toggleSidebar = () => {
            this.setState(state => ({
                open: !state.open
            }));
        };
        this.state = {
            open: false,
            toggleSidebar: this.toggleSidebar
        };
    }

    render() {
        return (
            <SidebarContext.Provider value={this.state}>
                <Navbar></Navbar>
                <Sidebar></Sidebar>
            </SidebarContext.Provider>
        );
    }
}

export default NavigationWrapper;