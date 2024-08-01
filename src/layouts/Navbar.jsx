import React, { Component } from 'react'
import logo from '../assets/logo.avif'
import { FaCartPlus } from "react-icons/fa"
import Badge from 'react-bootstrap/Badge'
export default class Navbar extends Component {
    render() {
        return (
            <div className='d-flex justify-content-between align-items-center p-3 shadow position-fixed w-100' style={{ backgroundColor: '#F5F6F8', height: '120px', zIndex:3}}>
                <div>
                    <img src={logo} alt="MyEMarket" loading='lazy' style={{ width: '100px', height: '100px' }} />
                </div>
                <div className='d-flex gap-3'>
                    <a href="#" className='text-decoration-none text-dark fw-bold text-uppercase fs-5'>Home</a>
                    <a href="#" className='text-decoration-none text-dark fw-bold text-uppercase fs-5'>Create Product</a>
                </div>
                <div className='card'>
                    <Badge bg="danger" style={{ width: '20px', height: '20px', position: 'absolute', top: '-8px', right: '-10px' }}>0</Badge>
                    <FaCartPlus style={{ width: '45px', height: '45px' }} />
                </div>

            </div>
        )
    }
}
