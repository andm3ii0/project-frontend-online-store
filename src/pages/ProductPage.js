import React from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';

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
    console.log(product.thumbnail);
    return (
      <div>
        <p data-testid="product-detail-name">{product.title}</p>
        <p>
          R$
          {product.price}
        </p>
        <img src={ product.thumbnail } alt={ product.title } />
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductPage;
