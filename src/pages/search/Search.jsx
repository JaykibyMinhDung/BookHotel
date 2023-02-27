import React from "react";
import SearchList from "./components/SearchList";

function reload() {
  window.location.replace("/");
}
const Search = () => {
  return (
    <React.Fragment>
      <div>
        <SearchList />
      </div>
    </React.Fragment>
  );
};

export default Search;
