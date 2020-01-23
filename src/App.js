import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Layout from './component/layout/Layout';
import Navbar from './component/navbar/Navbar';
import Sidebar from './component/sidebar/Sidebar';

function App() {
  return (
    <Layout>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </Layout>
  );
}

export default App;
