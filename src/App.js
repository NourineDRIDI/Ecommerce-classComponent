import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import AllProducts from './components/AllProducts'
import OneProduct from './components/OneProduct'
import axios from 'axios'
import CreateProduct from './components/CreateProduct'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      vue: "home",
      products: [],
      purchasedproducts: []
    }
  }

  // old way to handle a promise
// componentDidMount(){
//   axios.get("http://localhost:3000/data.json").then((response)=>{this.setState({...this.state,products:response.data})}).catch((error)=>console.log(error))
// }
//  this is the new way async-await
componentDidMount(){
  (async () => {
    try {
      const response = await axios.get("http://localhost:3000/data.json")
      console.log(response.data)
      this.setState({...this.state, products : response.data})
    } catch (error) {
      console.log(error)
    }
  })()
}
  changevue = (vue)=> {
    this.setState({ vue: vue })
  }
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{paddingTop: '135px', paddingBottom:'90px', position: 'relative'}}>
         <AllProducts products={this.state.products}/> 
         <CreateProduct/>
        </div>
        <Footer/>
      
      </div>
    )
  }
}

