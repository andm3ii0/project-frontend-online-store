import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { onHandleClick, onHandleChange, inputValue } = this.props;
    return (
      <div>
        <h1 className="titulo">Logo</h1>
        <div>
          <input
            type="text"
            value={ inputValue }
            data-testid="query-input"
            placeholder="Pesquisar"
            onChange={ onHandleChange }
          />
          <button
            type="button"
            // value={ inputValue }
            data-testid="query-button"
            onClick={ onHandleClick }
          >
            Pesquisar

          </button>
          <Link
            data-testid="shopping-cart-button"
            to="/cart"
          >
            Carrinho
          </Link>
        </div>

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
