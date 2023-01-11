import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getCategories } from './services/api';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends React.Component {
  componentDidMount() {
    getCategories();
  }

  render() {
    return (
      <Switch>
        <Route path="/cart" component={ Cart } />
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

export default App;
