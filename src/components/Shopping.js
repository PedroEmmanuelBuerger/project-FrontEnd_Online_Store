import React from 'react';
import PropTypes from 'prop-types';

export default class Shopping extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt="logo-do-mercado-livre" />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </div>
    );
  }
}
Shopping.propTypes = {
  price: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;
