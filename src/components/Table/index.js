import React from 'react';
import Row from '../Row';
import './style.css';
// import PropTypes from 'prop-types'

export default function Table(props) {
        
    const getColumns = () => ['Photo', <Name sort={props}/>, 'Phone', 'Email', <Age sort={props}/>]

    const getHeader = () => {
      const columns = getColumns()
      return columns.map( (column, index) => <th key={index}>{column}</th>)
    }
    
    const getRows = () => props.data.map( row => <tr key={row.id}><Row data={row}  /></tr>)
    
    return (
        <div style={{ justifyContent: "center", display: "flex" }}>
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
    const direction = sort.nameIsSorted ? 'fa fa-angle-up' : 'fa fa-angle-down';
  return (
      <span>
          Name <i className={direction} 
            onClick={sort.sortNames}></i>
     </span>
    )
 }

const Age =  ({ sort }) => {
    const direction = sort.ageIsSorted ? 'fa fa-angle-up' : 'fa fa-angle-down';
    return (
        <span>
            Age <i className={direction} 
              onClick={sort.sortAges}> {' '} </i>
       </span>
      )
 }