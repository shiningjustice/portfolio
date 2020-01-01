/************************************************************
  IMPORTS
*************************************************************/
// Frameworks
import React from 'react';
// Components 
import Header from '../Header/Header';
import Main from '../Main/Main';
// Styles
import './App.css';
import '../scrollbar.css';
// Libraries

function App() {
  return (
    <div className="App">
      <Header inheritedClassName="notIntro"></Header>
      <Main></Main>
      {/* <div class="string" title="pull me"></div>
      <input type="checkbox" id="switch" class="lightSwitch" /> */}

      <footer>
        <div className="notIntro secondaryFont italic">© 2019-2020 Phoebe Law</div>
      </footer>
    </div>
  );
}

export default App;