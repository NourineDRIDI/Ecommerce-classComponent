import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import AllProducts from './components/AllProducts'
import OneProduct from './components/OneProduct'
import axios from 'axios'
import CreateProduct from './components/CreateProduct'
import Cart from './components/Cart'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      vue: "Home",
      products: [],
      purchasedproducts: []
    }
    this.changevue = this.changevue.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.addProduct= this.addProduct.bind(this)
  }

  // old way to handle a promise
  // componentDidMount(){
  //   axios.get("http://localhost:3000/data.json").then((response)=>{this.setState({...this.state,products:response.data})}).catch((error)=>console.log(error))
  // }
  //  this is the new way async-await
  componentDidMount() {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3000/data.json")
        console.log(response.data)
        this.setState({ ...this.state, products: response.data })
      } catch (error) {
        console.log(error)
      }
    })()
  }
  changevue = (vue) => {
    this.setState({ vue: vue })
  }
  addToCart = (p)=> {
    this.setState({purchasedproducts:[...this.state.purchasedproducts, p]})
  }
  addProduct = (obj)=>{
    this.setState({products:[...this.state.products,obj]})
  }
  render() {
    return (
      <div>
        <Navbar purchasedproducts = {this.state.purchasedproducts} changevue = {this.changevue} />
        <div style={{ paddingTop: '135px', paddingBottom: '90px', position: 'relative' }}>
          {this.state.vue === "Home" && <AllProducts products={this.state.products} addToCart = {this.addToCart} />}
          {this.state.vue === "CreateProduct" && <CreateProduct  addProduct={this.addProduct} changevue= {this.changevue} />}
          {this.state.vue === "Cart" && <Cart purchasedproducts = {this.state.purchasedproducts}  changevue= {this.changevue} />}
        </div>
        <Footer />

      </div>
    )
  }
}

