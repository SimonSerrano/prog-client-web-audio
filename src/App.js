import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Layout from './component/layout/Layout';
import Navbar from './component/navbar/Navbar';
import Sidebar from './component/sidebar/Sidebar';
import Content from './component/content/Content';
import PluginList from './component/plugin-list/PluginList';

function App() {
  return (
    <Layout>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Content>
        <PluginList></PluginList>
      </Content>
    </Layout>
  );
}

export default App;
