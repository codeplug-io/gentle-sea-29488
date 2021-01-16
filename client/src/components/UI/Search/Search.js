import React from "react";
import classConcat from "../../../assets/functions";
import Radium from "radium";
import style from "./search-style.js";
import classes from "./search-classes.css";
import "./search-classes.css";

const search = props => {
  console.log(
    classConcat([classes.AlgoliaAutocomplete, classes.AlgoliaAutocompleteRight])
  );

  return (
    <form className="FromSrch">
      <span
        className="AlgoliaAutocomplete AlgoliaAutocompleteRight"
        style={style.Span}
      >
        <input
          className="Input"
          type="search"
          id="algolia-doc-search"
          placeholder="Search"
          aria-label="Search docs"
          autocomplete="off"
          spellcheck="false"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded="false"
          aria-labelledby="algolia-doc-search"
          aria-owns="algolia-autocomplete-listbox-0"
          dir="auto"
          style={style.Input}
          yollo="expandedSearchBar"
        />

        <pre aria-hidden="true" style={style.Pre}>
          b
        </pre>

        <span
          className="Span"
          role="listbox"
          id="algolia-autocomplete-listbox-0"
          style="Span2"
        >
          <div class="DivSearch"></div>
        </span>
      </span>
    </form>
  );
};

export default Radium(search);
// [classes.AlgoliaAutocomplete, classes.AlgoliaAutocompleteRight]
