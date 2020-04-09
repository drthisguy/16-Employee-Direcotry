import React, { Component } from 'react'
// import PropTypes from 'prop-types'


export default class Table extends Component {
    
    constructor(props){
      super(props);
      this.getHeader = this.getHeader.bind(this);
      this.getRowData = this.getRowData.bind(this);
      this.getColumns = this.getColumns.bind(this);
    }
    
    getColumns = function(){
        return ['Photo', 'Name', 'Email', 'Phone', 'DOB',]
 
    }
    
    getHeader = function(){
      const columns = this.getColumns()
      return columns.map( column => <th column={column}>{column}</th>)
    }
    
    getRowData = function(){
      const items = this.props.data;
      console.log("Table -> getRowData -> items", items)
      const keys = this.getColumns();
      return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
      })
    }
    
    render() {
        return (
          <div>
            <table>
            <thead>
              <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
              {this.getRowData()}
            </tbody>
            </table>
          </div>
          
        );
    }
}

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{
    return <td key={props.data[key]}>{props.data[key]}</td>
  })
}