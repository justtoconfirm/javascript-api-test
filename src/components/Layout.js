import React from 'react';

const Layout = ({ children }) => {
	return (

		<>
			<main role="main">

				{children}

			</main>

			<footer>
				&copy; {new Date().getFullYear()}
			</footer>
		</>

	);
}

export default Layout;
