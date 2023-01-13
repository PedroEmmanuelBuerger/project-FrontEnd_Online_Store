import React from 'react';
import Header from '../components/Header';

export default class Cart extends React.Component {
  render() {
    return (
      <div>
        <Header { ...this.props } />
        <div className="container">
          <h2 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h2>
        </div>
      </div>
    );
  }
}
