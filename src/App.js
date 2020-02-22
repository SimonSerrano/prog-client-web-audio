import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Layout from './component/layout/Layout';
import Navbar from './component/navbar/Navbar';
import Sidebar from './component/sidebar/Sidebar';
import Content from './component/content/Content';
import PluginList from './component/plugin-list/PluginList';
import SidebarContext from './context/SidebarContext';
import PluginForm from './component/plugin-form/PluginForm';
import PluginView from './component/plugin-view/PluginView';
import RouteContext from './context/RouteContext';
import { HOME, ADD_PLUGIN } from './constants/routes';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import withAuth from "./utils/withAuth";
import LoginForm from "./component/login-form/LoginForm";
import NavigationWrapper from './component/navigation-wrapper/NavigationWrapper';


class App extends React.Component {


  render() {
    return (
      <Layout>
        <BrowserRouter >

          <NavigationWrapper></NavigationWrapper>

          <Content>
            <Switch>
              <Route path="/home" component={withAuth(PluginList)} />
              <Route path="/pluginView" component={withAuth(PluginView)} />
              <Route path="/add-plugin" component={withAuth(PluginForm)} />
              <Route path="/login" component={LoginForm} />
            </Switch>
          </Content>

        </BrowserRouter>
      </Layout >
    );
  }


}

export default App;
