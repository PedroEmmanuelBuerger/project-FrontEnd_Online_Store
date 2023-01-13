import React from 'react';
import Header from '../components/Header';
import { getProductById } from '../services/api';

export default class Product extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const data = getProductById(id);
    this.setState((currentState) => ({
      ...currentState,
      isLoading: false,
      ...data,
    }));
  }

  render() {
    return (
      <div>
        <Header { ...this.props } />
        <div className="container">
          Produto
        </div>
      </div>
    );
  }
}
