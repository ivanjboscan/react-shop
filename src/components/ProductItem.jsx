import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';

import btAddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {

	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
		// alert('Add to cart');
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>$ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={btAddToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;