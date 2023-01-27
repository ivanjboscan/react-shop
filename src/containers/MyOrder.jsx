import React,{ useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';

import flechita from '@icons/flechita.svg';

const MyOrder = () => {

	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map( (product,index) => (
					<OrderItem product={product} indexValue={index} key={`orderItem-${product.id}`}/>
				))}

				<div className="order">
					<p>
						<span>Total {state.cart.length}</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;