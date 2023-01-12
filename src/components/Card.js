import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;

    return (
      <div data-testid="product" className="product-card">
        <img src={ thumbnail } alt={ title } />
        <h3>{ title }</h3>
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
  // id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
