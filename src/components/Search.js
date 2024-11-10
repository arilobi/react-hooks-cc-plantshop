import React from "react";
import { useState } from "react";

function Search({ onSearch }) {
  // Setting it as an empty string for flexibility
  const [searchItem, setSearchItem] = useState("");

  // Whatever the user inputs in the search, the function handleSearchChange will be called and update the state.
  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
    onSearch(e.target.value);
  }

  // Rendering
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchItem}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
