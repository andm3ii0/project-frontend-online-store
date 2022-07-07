import React from 'react';
import Header from './Header';
import ListCategories from './ListCategories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ListCategories />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
