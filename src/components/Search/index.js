import React from "react";
import PropTypes from 'prop-types';
import './style.css';

export default function SearchField({ query, onSearch }) {

  return (
    <div className={"wrap"}>
      <form>
        <input
          type="text"
          name="query"
          placeholder="Search Directory ..."
          value={query}
          onChange={onSearch}
        />
      </form>
    </div>
  );
}

// propTypes
SearchField.propTypes = {
  SearchField: PropTypes.object
}