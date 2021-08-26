import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition...`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionay">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          className="form-control"
          placeholder="Search for a Word"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
