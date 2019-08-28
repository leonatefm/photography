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
      <footer className="App-footer">
        <p>Designed by Chengqi Zhu &copy; 2019</p>
        <Logo size="small" withName={false} />
      </footer>
    </div>
  );
}

export default App;
