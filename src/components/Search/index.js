import React from "react";
import PropTypes from 'prop-types';
import style from './style';

export default function SearchField({ query, onSearch }) {

  return (
    <div style={ style.wrap }>
      <form>
        <input
          style={ style.input }
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