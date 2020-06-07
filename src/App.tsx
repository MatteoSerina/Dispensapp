import React from 'react';
import './App.css';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

import PlusMinus from './components/PlusMinus';
import HeaderBar from './components/HeaderBar';

function App() {

  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <PlusMinus></PlusMinus>
    </div>
  );
}

export default App;


