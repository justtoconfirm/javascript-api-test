import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
		position: relative;
		// Set the base font size to 10px to allow the rem units to be easily calculated
		font-size: 62.5%;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
		// Remove default margin and padding from all elements
		margin: 0;
		padding: 0;
	}

	body {
		// Fallback to set the font-size for legacy browsers that do not support the rem unit
		font-size: 16px;
		// Set the default font-size to equal 16px (1.6 * 10px = 16px)
		font-size: 1.6rem;
		background-color: #fff;
		-webkit-font-smoothing: antialiased;
		margin: 0;
		padding: 0;
	}

	main {
		// Set the property for IE11 when using the <main> element
		display: block;
		// Push the page footer to the bottom of the page
		min-height: 100vh;
	}

	h1, h2, h3, h4, h5, h6, p {
		// Set the default margin to generate a consistent layout and spacing
		margin-top: 2rem;
	}

	img {
		// Override the image width and constrain where necessary
		max-width: 100%;
		// Maintain the aspect ratio of the image to allow it to scale correctly
		height: auto;
	}

	section {
		padding-block: min(20vh, 2rem);
	}

	.container {
		margin: 0 auto;
		@media screen and (min-width: 800px) {
			max-width: 1200px;
		}
	}
	
	.row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		max-width: 90rem;
		margin-left: auto;
		margin-right: auto;
		padding: 2rem;
		gap: 1rem;
	}
`;

export default GlobalStyles;