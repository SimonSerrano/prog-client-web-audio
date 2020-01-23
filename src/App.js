import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Layout from './component/layout/Layout';
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <Layout>
      <Navbar></Navbar>
    </Layout>
  );
}

export default App;
