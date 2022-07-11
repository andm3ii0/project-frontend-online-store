import PropTypes from 'prop-types';
import React from 'react';
import CartCardItem from './CardCartItem';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      qtdItem: 3,
    };
  }

  render() {
    const { cartItems } = this.props;
    const { qtdItem } = this.state;
    console.log(qtdItem);
    // findIndex() retorna o primeiro elemento da condição
    const stringObj = cartItems.map((item) => JSON.stringify(item));
    const noRepeatItemsString = stringObj.filter(
      (ele, pos) => stringObj.indexOf(ele) === pos,
    );
    const noRepeatItems = noRepeatItemsString.map((item) => JSON.parse(item));
    return (
      cartItems.length === 0 ? (
        <div>
          <p
            className="msg-vazio"
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </p>
        </div>
      ) : noRepeatItems.map((item) => {
        const qtd = cartItems.filter(
          (item1) => JSON.stringify(item1) === JSON.stringify(item),
        ).length;
        return (
          <CartCardItem
            key={ item.id }
            title={ item.title }
            thumbnail={ item.thumbnail }
            qtd={ qtd }
          />
        );
      })

    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.shape([]).isRequired,
};

export default Cart;
