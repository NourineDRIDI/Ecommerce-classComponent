import React, { Component } from 'react'
import { products } from '../data'
import OneProduct from './OneProduct'   
export default class AllProducts extends Component {
    constructor(props){
        super(props)
    }

render() {
    return (
        <div className='d-flex flex-wrap gap-3 justify-content-center'>
        {this.props.products.map((product, index) => (
            <OneProduct
                key={index}
                product={product}
                addToCart={this.props.addToCart}
            />
        ))}
    </div>
    )
  }
}
