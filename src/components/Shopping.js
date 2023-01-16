import React from 'react';
import PropTypes from 'prop-types';

export default class Shopping extends React.Component {
  atualizarQuantidade = (tipo) => {
    const { atualizarCarrinho } = this.props;
    const carrinhoInicial = localStorage.getItem('cart');
    if (carrinhoInicial) {
      const { id: idProduto } = this.props;
      const carrinhoDurante = JSON.parse(carrinhoInicial);
      const carrinhoFiltrado = carrinhoDurante.map((item) => {
        if (item.id === idProduto) {
          if (tipo === 'incremento') {
            item.quantidade += 1;
          }
          if (tipo === 'decremento' && item.quantidade > 1) {
            item.quantidade -= 1;
          }
        }
        return item;
      });
      if (tipo === 'remover') {
        const cart = carrinhoFiltrado.filter((item) => item.id !== idProduto);
        localStorage.setItem('cart', JSON.stringify(cart));
        return atualizarCarrinho();
      }
      localStorage.setItem('cart', JSON.stringify([...carrinhoFiltrado]));
      atualizarCarrinho();
    }
  };

  render() {
    const { title, price, thumbnail, quantidade } = this.props;
    return (
      <div className="cartProductContainer">
        <button
          onClick={ () => this.atualizarQuantidade('remover') }
          data-testid="remove-product"
          type="button"
        >
          Remove
        </button>
        <img src={ thumbnail } alt="logo-do-mercado-livre" />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>
          R$
          {' '}
          {price}
        </p>
        <button
          onClick={ () => this.atualizarQuantidade('decremento') }
          data-testid="product-decrease-quantity"
          type="button"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => this.atualizarQuantidade('incremento') }
        >
          +
        </button>
      </div>
    );
  }
}
Shopping.propTypes = {
  price: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  quantidade: PropTypes.number,
}.isRequired;
