import './App.scss';
import * as React from 'react';
import Gallery from '../Gallery';
import Logo from '../Logo';
import Nav from '../Nav';

class App extends React.PureComponent {
  colorSchemeQuery = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  componentDidMount() {
    this.setColorTheme();
    this.colorSchemeQuery && this.colorSchemeQuery.addListener(this._handleColorSchemeChange);
  }

  componentWillUnmount() {
    this.colorSchemeQuery && this.colorSchemeQuery.removeListener(this._handleColorSchemeChange);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Nav />
        </header>
        <Gallery />
        <footer className="App-footer">
          <p>Designed by Chengqi Zhu &copy; 2019</p>
          <Logo size="small" withName={false} />
        </footer>
      </div>
    );
  }

  _handleColorSchemeChange = () => {
    this.setColorTheme();
  };

  setColorTheme() {
    if (this.colorSchemeQuery && this.colorSchemeQuery.matches) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}

export default App;
