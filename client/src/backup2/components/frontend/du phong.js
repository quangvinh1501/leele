import React, { useState } from "react";
import './css/product.css';
import NavBar from "./NavBar";
import FilterProduct from "./FilterProduct";
class ProductPage extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <section className="section services-section" id="services">
                    <div className="container pb-5 mb-sm-2" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <div className="row" style={{ marginBottom: '10px',textAlign:'center',marginTop:'10px'}}>
                            <FilterProduct/>
                        </div>
                        <div className="row" style={{ marginBottom: '10px' }}>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/8.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/1.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/2.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/3.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: '10px' }}>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/4.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/5.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/6.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/7.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginBottom: '10px' }}>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/8.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/9.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/10.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="thumb-wrapper">
                                    <div className="img-box hovereffect">
                                        <img src="../../../products/4.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="thumb-content overlay">
                                        <h4>Nikon DSLR</h4>
                                        <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                                        <div className="star-rating">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default ProductPage;