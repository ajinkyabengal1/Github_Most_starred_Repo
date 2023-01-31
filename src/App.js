import React from 'react';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsList from './Components/List';

function App() {
  return (
    <div className="app">
        <h1 className="page-title">
          * THE LIST OF THE MOST STARRED GITHUB REPO *
        </h1>
        <CardsList/>
    </div>
  );
}

export default App;
