import React from "react";

const Search = ({ searchquery, setSearchquery, handleEnter }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEnter();
    }
  };
  return (
    <input
      type="text"
      placeholder="search by name"
      onChange={(e) => setSearchquery(e.target.value)}
      value={searchquery}
      onKeyDown={handleKeyPress}
    />
  );
};
export default Search;
