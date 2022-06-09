import React, { Component } from "react";
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProducList from './ProducList';
import { Col, Container, Row } from 'reactstrap';
import alertify from 'alertifyjs';
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
        });
      });
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    newCart.push({ product: product, quantity: 1 });
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart");

  }
  removeFormCart = (product) => {
    let newCart = this.state.cart;
    newCart = newCart.filter(item => item.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.success(product.productName + " removed from cart");
  }
  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFormCart={this.removeFormCart} />
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render={props =>
                  (
                    <ProducList {...props}
                      info={productInfo}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      addToCart={this.addToCart}
                    />
                  )
                } />
                <Route exact path="/cart" render={props =>
                  (
                    <CartList {...props}
                      info={productInfo}
                      cart={this.props.cart}
                      removeFormCart={this.props.removeFormCart}
                    />
                  )
                } />
                <Route component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
