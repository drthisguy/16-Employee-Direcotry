import React from "react";
import PropTypes from 'prop-types'

export default function SearchField(props) {

  return (
    <div>
      <form>
        <input
          style={{ flex: "10", padding: "5px" }}
          type="text"
          name="query"
          placeholder="Search Directory ..."
          value={props.query}
          onChange={props.onChange}
        />
      </form>
    </div>
  );
  
}

// propTypes
SearchField.propTypes = {
  SearchField: PropTypes.func
}
