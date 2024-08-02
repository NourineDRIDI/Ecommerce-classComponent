import React, { Component } from 'react'
import logo from '../assets/logo.avif'
import { FaCartPlus } from "react-icons/fa"
import Badge from 'react-bootstrap/Badge'
export default class Navbar extends Component {
    constructor(props) {
        super(props)
        
        
    }
    render() {
        console.log(this.props, " this is the navbar")
        return (
            <div className='d-flex justify-content-between align-items-center p-3 shadow position-fixed w-100' style={{ backgroundColor: '#F5F6F8', height: '120px', zIndex:3}}>
                <div>
                   <a href="javascript:undefined" onClick={()=>this.props.changevue("Home")}> <img src={logo} alt="MyEMarket" loading='lazy' style={{ width: '100px', height: '100px' }} /></a>
                </div>
                <div className='d-flex gap-3'>
                    <a href="#" onClick={()=>this.props.changevue("Home")} className='text-decoration-none text-dark fw-bold text-uppercase fs-5'>Home</a>
                    <a href="#" onClick={()=>this.props.changevue("CreateProduct")} className='text-decoration-none text-dark fw-bold text-uppercase fs-5'>Create Product</a>
                </div>
                <a href="javascript:undefined" onClick={()=>this.props.changevue("Cart")}>
                    <Badge bg="danger" style={{ width: '20px', height: '20px', position: 'absolute', top: '30px', right: '5px' }}>{this.props.purchasedproducts?.length}</Badge>
                    <FaCartPlus size={45} />
                </a>

            </div>
        )
    }
}
