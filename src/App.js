import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getCategories } from './services/api';
import Home from './pages/Home';

class App extends React.Component {
  componentDidMount() {
    getCategories();
  }

  render() {
    return (
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
    );
  }
}

export default App;
