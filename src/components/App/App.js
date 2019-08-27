import './App.scss';
import * as React from 'react';
import Gallery from '../Gallery';
import Logo from '../Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <Gallery />
    </div>
  );
}

export default App;
