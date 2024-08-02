import React, { Component } from 'react'



export default class CreateProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {
        id: crypto.randomUUID(),
        image: "",
        price: "",
        category: "",
        name: "",
        description: ""
      }
    }
  }

  render() {
    console.log(this.state.product, "this is my product")
    return (
      <div className='bg-light d-flex flex-column justify-content-center align-items-center '>
        <label for="basic-url">Your Product Name</label>
        <input name="name" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" className='h-300 w-40' onChange={
          (e) => this.setState({ product: { ...this.state.product, name: e.target.value } })
        } />
        <label for="basic-url">Your Product image URL</label>
        <input name="image" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" className='h-300 w-40' onChange={
          (e) => this.setState({ product: { ...this.state.product, image: e.target.value } })
        } />
        <label for="basic-url">Your Product's Price</label>
        <input name="price" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" className='h-300 w-40' onChange={
          (e) => this.setState({ product: { ...this.state.product, price: e.target.value } })
        } />
        <label for="basic-url">Your Product's Category</label>
        <input name="category" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" className='h-300 w-40' onChange={
          (e) => this.setState({ product: { ...this.state.product, category: e.target.value } })
        } />
        <label for="basic-url">Your Product's Description </label>
        <input name="description" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" className='h-300 w-40' onChange={
          (e) => this.setState({ product: { ...this.state.product, description: e.target.value } })
        } />
        <div className='d-flex justify-content-end p-5 gap-4'>
          <button className='btn btn-danger' onClick={() => {
            this.props.addProduct(this.state.product)
            this.setState({
              product: {
                id: crypto.randomUUID(),
                image: "",
                price: "",
                category: "",
                name: "",
                description: ""
              }
            })
            this.props.changevue("Home")
          }}> Add Product </button>
          <button className='btn btn-outline-danger'> Cancel </button>
        </div>
      </div>
    )
  }
}
