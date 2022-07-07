import React from 'react';
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

  onHandleClick = async () => {
    const { inputValue } = this.state;
    const itensList = await getProductsFromCategoryAndQuery(`search?q=${inputValue}`);
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
        <ListCategories />
        {itensList === undefined ? (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) : itensList.map((produto) => (
          <div key={ produto.id } data-testid="product">
            <img src={ produto.thumbnail } alt={ produto.title } />
            <p>{produto.title}</p>
            <p>{produto.price}</p>
          </div>))}
      </div>
    );
  }
}

export default Home;
