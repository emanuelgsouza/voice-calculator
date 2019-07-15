import React from 'react';
import Toolbar from './components/Toolbar';
import './assets/reset.css';
import './assets/general.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/main';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Router>
        <Route path="/" exact component={MainPage}></Route>
      </Router>
    </div>
  );
}

export default App;
