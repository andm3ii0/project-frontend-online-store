import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import logoCart from '../logo-carrinho.png';

class Header extends React.Component {
  render() {
    const { onHandleClick, onHandleChange, inputValue } = this.props;
    return (
      <div className="header">
        <img src={ logoCart } alt="Logo-Shopping" />
        <div>
          <input
            type="text"
            value={ inputValue }
            data-testid="query-input"
            placeholder="Pesquisar"
            onChange={ onHandleChange }
            className="input-header"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ onHandleClick }
            className="input-header"
          >
            Pesquisar

          </button>
        </div>
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
          className="cart-button"
        >
          Carrinho
        </Link>
      </div>
    );
  }
}

Header.propTypes = {
  onHandleClick: PropTypes.func.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Header;
