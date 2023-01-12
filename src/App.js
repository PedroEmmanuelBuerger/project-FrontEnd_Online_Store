import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getCategories } from './services/api';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

class App extends React.Component {
  state = {
    categorias: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchCategorias();
  }

  fetchCategorias = async () => {
    const categorias = await getCategories();
    this.setState({
      categorias,
      isLoading: false,
    });
  };

  render() {
    return (
      <Switch>
        <Route path="/cart" component={ Cart } />
        <Route exact path="/" render={ () => <Home { ...this.state } /> } />
      </Switch>
    );
  }
}

export default App;
