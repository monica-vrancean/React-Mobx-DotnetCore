import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import TodoList from './todo-list/todo-list.component';
import { Provider } from 'mobx-react';
import todoList from './context/todo-list';
import { Route } from 'react-router';
import { HashRouter as Router, Switch } from 'react-router-dom';
import recipeListViewModel from './context/recipe-list';
import TabMenuComponent from './tab-menu/tab-menu.component';
import viewState  from './context/view-state';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List</h1>
        </header>
        <Provider todoListViewModel={todoList} recipeListViewModel={recipeListViewModel} viewState={viewState}>
          <Router>
            <Switch>
              <Route path='/todolist' component={TodoList} />
              <Route path='/*' component={TabMenuComponent}/>

            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
