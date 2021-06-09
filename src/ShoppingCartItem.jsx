import React from 'react';
import "./css/shoppingcart.css"

const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img className="shoppingcart-img" src={props.image} alt={`${props.title} book`} />


			<div>
				<h1 className="title">{props.title}</h1>
				<p>$ {props.price}</p>
				<button className="remove-cart">Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
