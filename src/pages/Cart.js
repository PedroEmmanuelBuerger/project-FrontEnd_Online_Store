import React from 'react';
import Header from '../components/Header';
import Shopping from '../components/Shopping';

export default class Cart extends React.Component {
  state = {
    produtos: [],

  };

  componentDidMount() {
    this.pegaCarrinhoLsg();
  }

  pegaCarrinhoLsg = () => {
    const carrinhoLsg = localStorage.getItem('cart');
    if (carrinhoLsg) {
      const data = JSON.parse(carrinhoLsg);
      this.setState({
        produtos: data,
      });
    }
  };

  render() {
    const { produtos } = this.state;
    return (
      <div>
        <Header { ...this.props } />
        <div className="container">
          <h2 data-testid="shopping-cart-empty-message">
            { produtos.length === 0 && 'Seu carrinho está vazio'}
          </h2>
          { produtos.map((result) => (
            <Shopping
              key={ result.id }
              { ...result }
              atualizarCarrinho={ this.pegaCarrinhoLsg }
            />)) }

        </div>
      </div>
    );
  }
}
