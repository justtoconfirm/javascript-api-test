import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
	cursor: pointer;
	display: inline-block;
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	padding: 1.4rem 3rem;
	background-color: ${props => props.primary ? "red" : "white"};
`;

const LinkStyle = styled.a`
	cursor: pointer;
	display: inline-block;
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	padding: 1.4rem 3rem;
	background-color: ${props => props.primary ? "red" : "white"};
`;

const Button = props => {

	const {
		type = 'button',
		url = '',
		primary,
		children,
		onClick,
	} = props;

	const isAnchor = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto'));

	const renderAsLink = () => 
		<LinkStyle href={url} role="button">{ children }</LinkStyle>

	const renderAsButton = () =>
		<ButtonStyle {...{ type, primary, onClick }}>{ children }</ButtonStyle>

	return (

		isAnchor ? renderAsLink() : renderAsButton()

	);
}

export default Button;