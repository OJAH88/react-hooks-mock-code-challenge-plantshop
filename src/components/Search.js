import React from "react";

function Search({search, handleSearchChange}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchChange} value={search}
      />
    </div>
  );
}

export default Search;
