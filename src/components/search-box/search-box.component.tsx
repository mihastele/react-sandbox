import React, { ChangeEventHandler, SyntheticEvent } from "react";

import "./search-box.styles.css";

interface ISearchBox {
  placeholder: string;
  handleChange: ChangeEventHandler;
}

export const SearchBox = ({ placeholder, handleChange }: ISearchBox) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
