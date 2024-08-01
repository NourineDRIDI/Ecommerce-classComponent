import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default class OneProduct extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
        <Card style={{ width: '18rem', height:'25rem' }} className='d-flex flex-column justify-content-between'>
        <Card.Img variant="top" src={this.props.product.image} style={{height: '200px'}}/>
        <Card.Body>
            <Card.Title>{this.props.product.name}</Card.Title>
            <Card.Text>
                {this.props.product.description}
                <br />
                {this.props.product.price}
            </Card.Text>
        </Card.Body>
            <Button variant="outline-danger text-dark">Add To Cart</Button>
    </Card>
    )
  }
}
