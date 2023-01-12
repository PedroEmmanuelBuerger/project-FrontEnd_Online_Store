import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Home extends React.Component {
  // constructor() {
  //   super();
  //   this.setState()
  // }

  render() {
    const { categorias, isLoading } = this.props;

    return (
      <div>
        <Header />
        <div className="container home">
          <div className="sidebar">
            <h3>
              Categorias
            </h3>
            <ul>
              {
                isLoading
                  ? <li>Carregando...</li>
                  : categorias.map(({ id, name }) => (
                    <li data-testid="category" key={ id }>{name}</li>
                  ))
              }
            </ul>
          </div>
          <div className="content">
            <h2 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  categorias: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;
