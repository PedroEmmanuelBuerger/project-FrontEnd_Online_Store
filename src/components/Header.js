import React from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link data-testid="shopping-cart-button" to="/cart">
          <RiShoppingCart2Fill />
        </Link>
      </header>
    );
  }
}
