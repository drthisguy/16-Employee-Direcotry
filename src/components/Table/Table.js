import React from 'react'
// import PropTypes from 'prop-types'


export default function Table(props) {
        
    const getHeader = () => {
      const columns = ['Photo', 'Name', 'Email', 'Phone', 'Age',]
      return columns.map( column => <th>{column}</th>)
    }
    
    const getRows = () => {
      const items = props.data;
      return items.map( row => <tr><RenderRow data={row}/></tr>)
    }
    
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
        
    );
}

function RenderRow(props) {
    return (
        <React.Fragment>
            <td>{props.data.avatar}</td>
            <td>{props.data.name.first}{' '}{props.data.name.last}</td>
            <td>{props.data.phone}</td>
            <td>{props.data.email}</td>
            <td>{props.data.dob.age}</td>
        </React.Fragment>
    );
}