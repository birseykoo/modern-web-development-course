import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    Nav, NavItem, NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class CartSummary extends Component {
    renderSummary() {
    return    (<UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Options - {this.props.cart.length}
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem right>
                    {this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>

                            {cartItem.product.productName}
                            <Badge color="primary" >{cartItem.quantity}</Badge>
                            <Badge color="danger" onClick={() => this.props.removeFormCart(cartItem.product)}>-</Badge>
                        </DropdownItem>

                    ))}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    <Link tag={Link} to="/cart">
                        Go to Cart
                    </Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>);
    }
    renderEmptyCart() {
        return (<div>
            <Nav>
                <NavItem>
                    <NavLink href="/">Empty Cart</NavLink>
                </NavItem>
            </Nav>
        </div>);
    }
  render() {
    return (
        <div>
            {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
        </div>
    )
  }
}
