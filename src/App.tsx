import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Users } from './Pages'
// import { Dashboard } from './Pages'
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
