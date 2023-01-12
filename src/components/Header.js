import React from 'react';
import PropTypes from 'prop-types';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default class Header extends React.Component {
  render() {
    const {
      search: {
        searchTerm,
        handleChange,
        handleSubmit,
      },
      categorias: {
        setSelectedCategory,
      },
    } = this.props;

    return (
      <header className="header">
        <Link to="/" onClick={ () => setSelectedCategory('') }>
          <img src={ logo } alt="Logotipo" className="logo" />
        </Link>
        <form onSubmit={ handleSubmit }>
          <input
            data-testid="query-input"
            type="text"
            onChange={ handleChange }
            value={ searchTerm }
          />
          <button data-testid="query-button" type="submit">Pesquisar</button>
        </form>
        <Link data-testid="shopping-cart-button" to="/cart">
          <RiShoppingCart2Fill />
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  search: PropTypes.shape({
    searchTerm: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
  }).isRequired,
  categorias: PropTypes.shape({
    setSelectedCategory: PropTypes.func,
  }).isRequired,
};
