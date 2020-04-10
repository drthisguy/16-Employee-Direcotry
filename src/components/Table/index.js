import React from 'react';
import Row from '../Row';
import './style.css';
// import PropTypes from 'prop-types'

export default function Table(props) {
        
    const getHeader = () => {
      const columns = ['Photo', <Name sort={props}/>, 'Phone', 'Email', <Age />,]
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

const Name =  ({ sort }) => {
    const direction = sort.nameIsSorted ? 'fa fa-angle-down' : 'fa fa-angle-up';
  return (
      <span>
          Name <i className={direction} 
            onClick={sort.sortNames}></i>
     </span>
    )
 };

const Age =  (props)=> {
  return (
      <span>Age <i className="fa fa-angle-down"></i></span>
    )
 };