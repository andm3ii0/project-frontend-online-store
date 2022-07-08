import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  onHandleClickCart = ({ target }) => {
    const { value } = target;
    const itemObj = JSON.parse(value);
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, itemObj],
    }));
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              onHandleClickCart={ this.onHandleClickCart }
            />) }
          />
          <Route exact path="/productDetails/:id" component={ ProductPage } />
          <Route
            path="/cart"
            render={ (props) => (<Cart { ...props } cartItems={ cartItems } />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
