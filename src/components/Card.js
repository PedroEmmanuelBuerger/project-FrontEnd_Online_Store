import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
  addToCart = () => {
    let produtoAtual = { ...this.props };
    const { quantidade } = this.props;
    produtoAtual.quantidade = quantidade;
    const local = localStorage.getItem('cart');
    if (local) {
      const arr = JSON.parse(local);
      const elementoExistente = arr.find((element) => element.id === produtoAtual.id);
      if (elementoExistente) {
        elementoExistente.quantidade += 1;
        produtoAtual = elementoExistente;
        const carrinhoFiltrado = arr.filter((element) => element.id !== produtoAtual.id);
        return localStorage
          .setItem('cart', JSON.stringify([...carrinhoFiltrado, produtoAtual]));
      }
      const novoLocal = [...arr, produtoAtual];
      localStorage.setItem('cart', JSON.stringify(novoLocal));
    } else {
      localStorage.setItem('cart', JSON.stringify([produtoAtual]));
    }
  };

  render() {
    const { id, title, thumbnail, price } = this.props;

    return (
      <div className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ `/product/${id}` }
        >
          <img src={ thumbnail } alt={ title } />
        </Link>
        <Link to={ `/product/${id}` }>
          <h3>{ title }</h3>
        </Link>
        <div className="product-price">
          <span className="currency">
            R$
          </span>
          <span className="price">
            { price }
          </span>
        </div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantidade: PropTypes.number,
};
Card.defaultProps = {
  quantidade: 1,
};
