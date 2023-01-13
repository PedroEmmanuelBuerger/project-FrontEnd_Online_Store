import React from 'react';
import Header from '../components/Header';
import { getProductById } from '../services/api';

export default class Product extends React.Component {
  state = { isLoading: true, data:{} };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.buscarProduto(id);
  }

  buscarProduto = async (id) => {
    const data = await getProductById(id);
    this.setState((currentState) => ({
      ...currentState,
      isLoading: false,
      data,
    }));
  }
  render() {
    const { isLoading, data } = this.state;
    return (
      <div>
        <Header { ...this.props } />
        <div className="container">
          { isLoading ? "Carregando" : (
            <>
            <img data-testid="product-detail-image" src={ data.pictures[0].secure_url } />
             <span data-testid="product-detail-name">{ data.title }</span>
             <span  data-testid="product-detail-price"> { data.price }</span>
             <button data-testid="shopping-cart-button">Adicionar ao carrinho</button>
            </>
            
          ) }
         

        </div>
      </div>
    );
  }
}
