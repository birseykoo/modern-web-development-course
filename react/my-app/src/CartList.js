import React, { Component } from 'react'
import { Table, Button} from 'reactstrap'

export default class CartList extends Component {
    // renderCart () {
    //     return(
    //         <Table striped>
    //             <thead>
    //                 <tr>
    //                     <th>id</th>
    //                     <th>productName</th>
    //                     <th>unitPrice</th>
    //                     <th>quantityPerUnit</th>
    //                     <th>unitsInStock</th>
    //                     <th>quantity</th>
    //                     <th>total</th>
    //                     <th></th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     this.props.cart.map(cartItem => (
    //                         <tr key={cartItem.product.id}>
    //                             <th scope='row'>{cartItem.product.id}</th>
    //                             <th>{cartItem.product.productName}</th>
    //                             <th>{cartItem.product.unitPrice}</th>
    //                             <th>{cartItem.product.quantityPerUnit}</th>
    //                             <th>{cartItem.product.unitsInStock}</th>
    //                             <th>{cartItem.quantity}</th>
    //                             <th>{cartItem.product.unitPrice * cartItem.quantity}</th>
    //                             <th><Button color="danger" onClick={() => this.props.removeFormCart(cartItem.product)}>-</Button></th>
    //                         </tr>
    //                     ))
    //                 }
    //             </tbody>
    //         </Table>
    //     )
    // }
  render() {
    return (
      <div>

            <Table striped>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>productName</th>
                        <th>unitPrice</th>
                        <th>quantityPerUnit</th>
                        <th>unitsInStock</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th scope='row'>{cartItem.product.id}</th>
                                <th>{cartItem.product.productName}</th>
                                <th>{cartItem.product.unitPrice}</th>
                                <th>{cartItem.product.quantityPerUnit}</th>
                                <th>{cartItem.product.unitsInStock}</th>
                                <th>{cartItem.quantity}</th>
                                <th>{cartItem.product.unitPrice * cartItem.quantity}</th>
                                <th><Button color="danger" onClick={() => this.props.removeFormCart(cartItem.product)}>-</Button></th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

      </div>
    )
  }
}
