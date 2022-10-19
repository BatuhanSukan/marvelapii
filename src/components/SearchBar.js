import React from "react";

function SearchBar({ setSearchTitle }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Hero"
        className="search"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;