/************************************************************
  IMPORTS
*************************************************************/
// Frameworks
import React from 'react';
// Components 
import Header from '../Header/Header';
import Main from '../../Pages/Main/Main';
// Styles
import './App.css';
import '../scrollbar.css';
// Libraries

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>

      <footer>
        <div className="secondaryFont italic">&copy; 2019-{new Date().getFullYear()} Phoebe Law</div>
      </footer>
    </div>
  );
}

export default App;