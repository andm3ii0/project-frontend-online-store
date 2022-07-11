import PropTypes from 'prop-types';
import React from 'react';
import { getProduct } from '../services/api';
import Header from './Header';

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProduct(id);
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    const { onHandleClickCart } = this.props;
    return (
      <div>
        <Header />
        <div className="product-page">
          <h2 data-testid="product-detail-name">{product.title}</h2>
          <p>
            R$
            {' '}
            {product.price}
          </p>
          <img src={ product.thumbnail } alt={ product.title } />
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            value={ JSON.stringify(product) }
            onClick={ onHandleClickCart }
          >
            Carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductPage.propTypes = {
  onHandleClickCart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductPage;
