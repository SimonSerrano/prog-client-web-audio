import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Layout from './component/layout/Layout';
import Navbar from './component/navbar/Navbar';
import Sidebar from './component/sidebar/Sidebar';
import Content from './component/content/Content';
import PluginList from './component/plugin-list/PluginList';
import SidebarContext from './component/context/SidebarContext';
import PluginForm from './component/plugin-form/PluginForm';
import PluginView from './component/plugin-view/PluginView';
import RouteContext from './context/RouteContext';
import { HOME, ADD_PLUGIN } from './constants/routes';


class App extends React.Component {

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
      <Layout>
        <SidebarContext.Provider value={this.state}>
          <Navbar></Navbar>
          <Sidebar></Sidebar>
        </SidebarContext.Provider>
        <Content>
          <RouteContext.Consumer>
            {
              ({route, toggleRoute}) => {
                if(route === HOME) {
                  return (<PluginList></PluginList>);
                }else if(route === ADD_PLUGIN) {
                  return (<PluginForm></PluginForm>);
                }else {
                  toggleRoute(HOME);
                }
              }
            }
          </RouteContext.Consumer>
        </Content>
      </Layout>
    );
  }


}

export default App;
