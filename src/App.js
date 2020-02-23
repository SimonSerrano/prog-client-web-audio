import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Layout from './component/layout/Layout';
import Content from './component/content/Content';
import PluginList from './component/plugin-list/PluginList';
import PluginForm from './component/plugin-form/PluginForm';
import PluginView from './component/plugin-view/PluginView';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import withAuth from "./utils/withAuth";
import LoginForm from "./component/login-form/LoginForm";
import NavigationWrapper from './component/navigation-wrapper/NavigationWrapper';
import LoginCreation from "./component/login-creation/LoginCreation";


class App extends React.Component {


  render() {
    return (
      <Layout>
        <BrowserRouter>
          <NavigationWrapper></NavigationWrapper>
          <Content>
            <Switch>
              <Route path="/home" component={PluginList} />
              <Route path="/pluginView" component={PluginView} />
              <Route path="/add-plugin" component={withAuth(PluginForm)} />
              <Route path="/createAccount" component={LoginCreation} />
              <Route path="/login" component={LoginForm} />
              <Redirect from='/' to='/home'/>
            </Switch>
          </Content>

        </BrowserRouter>
      </Layout >
    );
  }


}

export default App;
