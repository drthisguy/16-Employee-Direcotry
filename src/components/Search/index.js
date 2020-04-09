import React, { Component } from "react";
import PropTypes from 'prop-types'

export class SearchField extends Component {
    state = {
        query: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            style={{ flex: "10", padding: "5px" }}
            type="text"
            name="query"
            placeholder="Search Directory ..."
            value={this.state.query}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

// propTypes
// SearchField.propTypes = {
//   SearchField: PropTypes.func.isRequired
// }


export default SearchField;
