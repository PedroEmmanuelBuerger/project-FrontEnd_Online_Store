import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';
import getSearchParam from './helpers';

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
      selectedCategory: '',
      setSelectedCategory: () => {},
    },
  };

  componentDidMount() {
    // buscar categorias disponíveis
    this.fetchCategorias();
    // atualizar estados
    this.setState((currentState) => ({
      ...currentState,
      search: {
        ...currentState.search,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
      },
      categorias: {
        ...currentState.categorias,
        selectedCategory: getSearchParam('category') ?? '',
        setSelectedCategory: this.setSelectedCategory,
      },
    }));
    // pesquisar por itens da categoria selecionada
    if ((getSearchParam('category').trim() ?? '') !== '') {
      this.fetchProducts(getSearchParam('category'), '');
    }
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
        ...currentState.categorias,
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

  setSelectedCategory = (categoryId) => {
    this.setState((currentState) => ({
      ...currentState,
      categorias: {
        ...currentState.categorias,
        selectedCategory: categoryId,
      },
    }));
    this.fetchProducts(categoryId, '');
  };

  render() {
    return (
      <Switch>
        <Route path="/cart" render={ () => <Cart { ...this.state } /> } />
        <Route exact path="/" render={ () => <Home { ...this.state } /> } />
      </Switch>
    );
  }
}

export default App;
