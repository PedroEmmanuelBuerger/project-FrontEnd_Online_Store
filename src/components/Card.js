import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
  render() {
    const { id, title, thumbnail, price } = this.props;

    return (
      <div data-testid="product" className="product-card">
        <Link to={ `/product/${id}` }>
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
        <button type="button">
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
};
