import React from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img src={ logo } alt="Logotipo" className="logo" />
        </Link>
        <form>
          <input type="text" />
          <button type="submit">Pesquisar</button>
        </form>
        <Link data-testid="shopping-cart-button" to="/cart">
          <RiShoppingCart2Fill />
        </Link>
      </header>
    );
  }
}
