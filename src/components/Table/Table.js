import React from 'react';
import Row from '../Row/Row';
// import PropTypes from 'prop-types'

export default function Table(props) {
        
    const getHeader = () => {
      const columns = ['Photo', 'Name', 'Email', 'Phone', 'Age',]
      return columns.map( column => <th>{column}</th>)
    }
    
    const getRows = () => props.data.map( row => <tr><Row data={row} /></tr>)
    
    return (
        <div>
        <table>
        <thead>
            <tr>{getHeader()}</tr>
        </thead>
        <tbody>
            {getRows()}
        </tbody>
        </table>
        </div> 
    )
}