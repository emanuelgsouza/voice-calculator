import React from 'react';
import Toolbar from './components/Toolbar';
import './assets/reset.css';
import './assets/general.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/main';
import NormalPage from './pages/normal';
import VoicePage from './pages/voice';

function App() {
  return (
    <div className="App">
    <Router>
      <Toolbar />
        <Route path="/" exact component={MainPage}></Route>
        <Route path="/normal" component={NormalPage}></Route>
        <Route path="/voice" component={VoicePage}></Route>
      </Router>
    </div>
  );
}

export default App;
