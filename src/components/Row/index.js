import React from 'react';
import PropTypes from 'prop-types'

export default function Row({ data }) {
    return (
        <React.Fragment> 
            <td><img src={data.avatar} alt={'Employee Avatar'}></img></td>
            <td>{data.name.first}{' '}{data.name.last}</td>
            <td>{data.phone}</td>
            <td><a href={`mailto:${data.email}`} style={{color: "tomato"}}>{data.email}</a></td>
            <td>{data.age}</td>
        </React.Fragment>   
    )
}

Row.propTypes = {
    Row: PropTypes.object
  }