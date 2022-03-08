import React from "react";
import './css/product.css';
const ProductSection = () => {

    return (
<div className="container" style={{paddingTop:'20px'}}>
	<div className="row">
		<div className="col-md-12">
			<h2>Trending <b>Products</b></h2>
			<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
			<ol className="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
				<li data-target="#myCarousel" data-slide-to="2"></li>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<div className="row">
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="../../../products/1.jpg" className="img-fluid" alt=""/>
								</div>
								<div className="thumb-content">
									<h4>Apple iPad</h4>
									<p className="item-price"><strike>$400.00</strike> <span>$369.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="../../../products/2.jpg" className="img-fluid" alt=""/>
								</div>
								<div className="thumb-content">
									<h4>Sony Headphone</h4>
									<p className="item-price"><strike>$25.00</strike> <span>$23.99</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>		
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="../../../products/3.jpg" className="img-fluid" alt=""/>
								</div>
								<div className="thumb-content">
									<h4>Macbook Air</h4>
									<p className="item-price"><strike>$899.00</strike> <span>$649.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>								
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="../../../products/4.jpg" className="img-fluid" alt=""/>
								</div>
								<div className="thumb-content">
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
				<div className="carousel-item">
					<div className="row">
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="../../../products/5.jpg" className="img-fluid" alt=""/>
								</div>
								<div className="thumb-content">
									<h4>Sony Play Station</h4>
									<p className="item-price"><strike>$289.00</strike> <span>$269.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="../../../products/6.jpg" className="img-fluid" alt=""/>
								</div>
								<div className="thumb-content">
									<h4>Macbook Pro</h4>
									<p className="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="../../../products/7.jpg" className="img-fluid" alt=""/>
								</div>
								<div className="thumb-content">
									<h4>Bose Speaker</h4>
									<p className="item-price"><strike>$109.00</strike> <span>$99.00</span></p>
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
								<div className="img-box">
									<img src="../../../products/8.jpg" className="img-fluid" alt=""/>
								</div>
								<div className="thumb-content">
									<h4>Samsung Galaxy S8</h4>
									<p className="item-price"><strike>$599.00</strike> <span>$569.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>						
					</div>
				</div>
				<div className="carousel-item">
					<div className="row">
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="../../../products/9.jpg" className="img-fluid" alt=""/>
								</div>
								<div className="thumb-content">
									<h4>Apple iPhone</h4>
									<p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
						<div className="col-sm-3">
							<div className="thumb-wrapper">
								<div className="img-box">
									<img src="../../../products/10.jpg" className="img-fluid" alt=""/>
								</div>
								<div className="thumb-content">
									<h4>Canon DSLR</h4>
									<p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
									<div className="star-rating">
										<ul className="list-inline">
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star"></i></li>
											<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
										</ul>
									</div>
									<a href="#" className="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
						</div>
					</div>
				</div>
			</div>
			<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
				<i className="fa fa-angle-left"></i>
			</a>
			<a className="carousel-control-next" href="#myCarousel" data-slide="next">
				<i className="fa fa-angle-right"></i>
			</a>
		</div>
		</div>
	</div>
</div>
    )
}
export default ProductSection;