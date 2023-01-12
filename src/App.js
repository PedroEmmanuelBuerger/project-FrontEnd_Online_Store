import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

class App extends React.Component {
  state = {
    search: {
      searchTerm: '',
      handleChange: () => {},
      handleSubmit: () => {},
      isLoading: false,
      data: {
        results: [],
      },
    },
    categorias: {
      data: [],
      isLoading: true,
    },
    // produtos: {
    //   data: {
    //     results: [],
    //   },
    //   isLoading: false,
    // },
  };

  componentDidMount() {
    this.fetchCategorias();
    this.setState((currentState) => ({
      ...currentState,
      search: {
        ...currentState.search,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
      },
    }));
  }

  handleChange = (e) => {
    const { target: { value } } = e;
    this.setState((currentState) => ({
      ...currentState,
      search: {
        ...currentState.search,
        searchTerm: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { search: { searchTerm } } = this.state;
    this.fetchProducts('', searchTerm);
  };

  fetchCategorias = async () => {
    const data = await getCategories();
    this.setState((currentState) => ({
      ...currentState,
      categorias: {
        data,
        isLoading: false,
      },
    }));
  };

  fetchProducts = async (categoryId, searchTerm) => {
    // definir estado de carregamento dos produtos como true
    this.setState((currentState) => ({
      ...currentState,
      search: {
        ...currentState.search,
        isLoading: true,
      },
    }));
    // buscar produtos
    const data = await getProductsFromCategoryAndQuery(categoryId, searchTerm);
    // atualizar estado com os produtos retornados pela api
    this.setState((currentState) => ({
      ...currentState,
      search: {
        ...currentState.search,
        data,
        isLoading: false,
      },
    }));
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
