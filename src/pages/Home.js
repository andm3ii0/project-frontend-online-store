import React from 'react';
import Header from './Header';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
