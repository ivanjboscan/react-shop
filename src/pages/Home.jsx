import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ProductList from '../containers/ProductList';

const Home = () => {
	return (
		<>
            <Header />
            {/* <Menu /> */}
			<ProductList />
		</>
	);
}

export default Home;