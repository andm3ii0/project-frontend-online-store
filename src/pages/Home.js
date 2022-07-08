import React from 'react';
import Proptypes from 'prop-types';
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
    const { onHandleClickCart } = this.props;
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
        ) : itensList.map((produto) => {
          console.log(produto);
          return (
            <div key={ produto.id }>
              <Link
                to={ `/productDetails/${produto.id}` }
                data-testid="product-detail-link"
              >
                <div data-testid="product">
                  <img src={ produto.thumbnail } alt={ produto.title } />
                  <p>{produto.title}</p>
                  <p>{produto.price}</p>
                </div>
              </Link>
              <button
                data-testid="product-add-to-cart"
                type="button"
                value={ JSON.stringify(produto) }
                onClick={ onHandleClickCart }
              >
                carrinho
              </button>
            </div>);
        })}
      </div>
    );
  }
}

Home.propTypes = {
  onHandleClickCart: Proptypes.func.isRequired,
};

export default Home;
