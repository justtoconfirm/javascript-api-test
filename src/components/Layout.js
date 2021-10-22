import React from 'react';
import GlobalStyles from '../GlobalStyles';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (

		<>
			<GlobalStyles />

			<main role="main">

				{children}

			</main>

			<Footer />
		</>

	);
}

export default Layout;
