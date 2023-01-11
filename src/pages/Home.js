import React from 'react';
import Header from '../components/Header';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <input type="text" />
          <button type="submit">Pesquisar</button>
        </form>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default Home;
