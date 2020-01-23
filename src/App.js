import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Layout from './component/layout/Layout';
import Navbar from './component/navbar/Navbar';
import Sidebar from './component/sidebar/Sidebar';
import Content from './component/content/Content';
import PluginList from './component/plugin-list/PluginList';
import SidebarContext from './component/context/SidebarContext';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.toggleSidebar = () => {
      this.setState(state => ({
        open: !state.open
      }));
    };

    this.state = {
      open: true,
      toggleSidebar: this.toggleSidebar
    };

  }

  render() {
    return (
      <Layout>
        <SidebarContext.Provider value={this.state}>
          <Navbar></Navbar>
          <Sidebar></Sidebar>
        </SidebarContext.Provider>
        <Content>
          <PluginList></PluginList>
        </Content>
      </Layout>
    );
  }


}

export default App;
