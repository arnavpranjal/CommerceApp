import React from "react";
import SearchIcon from "@material-ui/icons/Search";
const Search = ({ searchquery, setSearchquery, handleEnter }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEnter();
    }
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for Products"
        value={searchquery}
        onChange={(e) => setSearchquery(e.target.value)}
        className="search-input"
        onKeyDown={handleKeyPress}
      />
      <SearchIcon className="search-icon" />
    </div>
  );
};
export default Search;
