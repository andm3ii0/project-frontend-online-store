import React from 'react';
import PropTypes from 'prop-types';

class CartCardItem extends React.Component {
  constructor() {
    super();
    this.state = {
      qtd: 1,
    };
  }

  componentDidMount() {
    const { qtd } = this.props;
    this.setState({ qtd });
  }

  onHandleChange = ({ target }) => {
    const { value } = target;
    this.setState((prevState) => (
      { qtd: value === '-' ? prevState.qtd - 1 : prevState.qtd + 1 }));
    this.setState((prevState) => ({ qtd: prevState.qtd < 1 ? 1 : prevState.qtd }));
  }

  render() {
    const { title } = this.props;
    const { qtd } = this.state;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <button
          value="-"
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.onHandleChange }
        >
          -

        </button>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {qtd}
        </p>
        <button
          value="+"
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.onHandleChange }
        >
          +

        </button>
      </div>
    );
  }
}

CartCardItem.propTypes = {
  qtd: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default CartCardItem;
