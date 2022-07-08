import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Header from './Header';
import ListCategories from './ListCategories';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }

  onHandleClick = async ({ target }) => {
    const { value } = target;
    const { inputValue } = this.state;
    const itensList = await
    getProductsFromCategoryAndQuery(`search?category=${value}&q=${inputValue}`);
    this.setState({ itensList: itensList.results });
  }

  onHandleChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputValue: value });
  };

  render() {
    const { inputValue, itensList } = this.state;
    return (
      <div>
        <Header
          inputValue={ inputValue }
          onHandleClick={ this.onHandleClick }
          onHandleChange={ this.onHandleChange }
        />
        <ListCategories onHandleClickCotegories={ this.onHandleClick } />
        {itensList === undefined ? (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) : itensList.map((produto) => (
          <Link to={ `/productDetails/${produto.id}` } key={ produto.id }>
            <div data-testid="product">
              <img src={ produto.thumbnail } alt={ produto.title } />
              <p>{produto.title}</p>
              <p>{produto.price}</p>
            </div>
          </Link>))}
      </div>
    );
  }
}

export default Home;
