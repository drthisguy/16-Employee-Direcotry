import React from "react";
import PropTypes from 'prop-types'

export default function SearchField({ query, onSearch }) {

  return (
    <div>
      <form>
        <input
          style={{ flex: "10", padding: "5px" }}
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
