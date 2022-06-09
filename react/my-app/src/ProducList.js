import React, { Component } from 'react'
import { Table,Button } from 'reactstrap'

export default class ProducList extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.info.title} - {this.props.currentCategory}</h1>
                <Table
                >
                    <thead>
                        <tr>
                            <th>
                                id
                            </th>
                            <th>
                                productName
                            </th>
                            <th>
                                unitePrice
                            </th>
                            <th>
                                quantityPerUnit
                            </th>
                            <th>
                                unitsInStock
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope='row'>{product.id}</th>
                                    <th>{product.productName}</th>
                                    <th>{product.unitPrice}</th>
                                    <th>{product.quantityPerUnit}</th>
                                    <th>{product.unitsInStock}</th>
                                    <th><Button color="primary" onClick={() => this.props.addToCart(product)}>Add to Cart</Button></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
