import React from "react";
import SearchList from "./components/SearchList";

function reload() {
  window.location.replace("/");
}
const Search = () => {
  return (
    <div>
      <div>
        <SearchList />
      </div>
      <div>
        <button type="button" onClick={reload}>
          Return Home
        </button>
      </div>
    </div>
  );
};

export default Search;
