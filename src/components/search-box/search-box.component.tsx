import React, { ChangeEventHandler } from 'react'

import './search-box.styles.css'

interface ISearchBox {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBox = ({ placeholder, handleChange }: ISearchBox): JSX.Element => {
	return (
		<input
			className="search"
			type="search"
			placeholder={placeholder}
			onChange={handleChange}
		/>
	)
}
