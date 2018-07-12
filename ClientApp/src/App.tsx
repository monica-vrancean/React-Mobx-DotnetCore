import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { Provider } from 'mobx-react';
import { Route } from 'react-router';
import { HashRouter as Router, Switch } from 'react-router-dom';
import TabMenuComponent from './components/tab-menu/tab-menu.component';
import rootStore from './store/root-store';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List</h1>
        </header>
        <Provider rootStore={rootStore}>
          <Router>
            <Switch>
              <Route path='/*' component={TabMenuComponent}/>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
