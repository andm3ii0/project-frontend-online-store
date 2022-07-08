import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    console.log(cartItems);
    return (
      cartItems.length === 0 ? (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      ) : cartItems.map((item) => (
        <div key={ item.id }>
          <p data-testid="shopping-cart-product-name">{item.title}</p>
          <p
            data-testid="shopping-cart-product-quantity"
          >
            {cartItems.filter(
              (item1) => JSON.stringify(item1) === JSON.stringify(item),
            ).length}
          </p>
        </div>
      ))

    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.shape([]).isRequired,
};

export default Cart;
