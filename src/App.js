import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './common/Header'
import Reservation from './Reservation'

function App() {
  return (
    <React.Fragment>
    <Header />
    <Reservation />
    </React.Fragment>
  );
}

export default App;
