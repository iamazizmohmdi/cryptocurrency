import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import { Navbar } from './components';
const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <div className='footer'></div>
      </div>
    </div>
  );
};

export default App;
