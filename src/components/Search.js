import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const InputStyle = styled.input`
	padding: 1.4rem 3rem;
`;

const Search = props => {
	
	const [searchValue, setSearchValue] = useState("");
  
	const handleSearchInputChanges = (e) => {
		setSearchValue(e.target.value);
	}

	const resetInputField = () => {
		setSearchValue("")
	}

	const callSearchFunction = e => {
    	e.preventDefault();
    	props.search(searchValue);
    	resetInputField();
  	}

  	return (
		<form className="search">
			<InputStyle
				value={searchValue}
				onChange={handleSearchInputChanges}
				type="text"
			/>
        
			<Button onClick={callSearchFunction} type="submit">Search</Button>
		</form>
    );
}

export default Search;