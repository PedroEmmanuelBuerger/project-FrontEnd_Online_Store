import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Card from '../components/Card';

class Home extends React.Component {
  render() {
    const {
      categorias: { data, isLoading },
      search: { data: { results }, isLoading: isLoadingProducts },
    } = this.props;

    return (
      <div>
        <Header { ...this.props } />
        <div className="container home">
          <div className="sidebar">
            <h3>
              Categorias
            </h3>
            <ul>
              {
                isLoading
                  ? <li>Carregando...</li>
                  : data.map(({ id, name }) => (
                    <li data-testid="category" key={ id }>{name}</li>
                  ))
              }
            </ul>
          </div>
          <div className="content">
            {results.length === 0 && (
              <h2 data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </h2>
            )}
            <div className="products-container">
              {isLoadingProducts && <h2>Carregando...</h2>}
              {!isLoadingProducts && (
                results.length > 0 ? (
                  results.map((result) => <Card key={ result.id } { ...result } />)
                ) : <h2>Nenhum produto foi encontrado</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  categorias: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })),
    isLoading: PropTypes.bool,
  }).isRequired,
  search: PropTypes.shape({
    data: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    isLoading: PropTypes.bool,
  }).isRequired,
  // produtos: PropTypes.shape({
  //   data: PropTypes.shape({
  //     results: PropTypes.arrayOf(PropTypes.shape({})),
  //   }),
  // }).isRequired,
};

export default Home;
