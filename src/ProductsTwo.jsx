import React from 'react';
import "./css/products.css"

// Components
import ProductTwo from './ProductTwo';

const ProductsTwo = props => {
	return (
		<div className="products-container">
			{props.products.map(product => (
				<ProductTwo
					key={product.key}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default ProductsTwo;
