import React, { Component } from 'react'


export default class Cart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <section className="h-100 h-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div className="card card-registration card-registration-2" style={{ "border-radius": "15px;" }}>
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0">Shopping Cart</h1>
                            <h6 className="mb-0 text-muted">{this.props.purchasedproducts.length}</h6>
                          </div>
                          <div>
                            {this.props.purchasedproducts.map((e, i) => {
                              return (
                                <div key={i}>
                                  <hr className="my-4" />

                                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                      <img
                                        src={e.image}
                                        className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                      <h6 className="text-muted">{e.name}</h6>
                                      <h6 className="mb-0">{e.category}</h6>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <input type = "number"/>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                      <h6 className="mb-0">$ {e.price}</h6>
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                      <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                                    </div>
                                  </div>

                                  <hr className="my-4" />
                                </div>
                              )
                            })
                            }
                          </div>

                          <div className="pt-5">
                            <h6 className="mb-0"><a href="javascript:undefined" onClick={() => this.props.changevue("Home")} className='text-decoration-none'><i
                              className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 bg-body-tertiary">
                        <div className="p-5">
                          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                          <hr className="my-4" />

                          <div className="d-flex justify-content-between mb-4">
                            <h5 className="text-uppercase">{this.props.purchasedproducts.length} items</h5>
                            <h5>$ {this.props.purchasedproducts.reduce((acc, e) => acc += (+e.price), 0).toFixed(2)}</h5>
                          </div>

                          <h5 className="text-uppercase mb-3">Shipping</h5>


                          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block btn-lg"
                            data-mdb-ripple-color="dark">CheckOut</button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}
