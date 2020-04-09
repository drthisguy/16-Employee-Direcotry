import React, { Component } from 'react'
import axios from 'axios'
import Table from '../Table/Table'

export class Employees extends Component {

    state = {
        employees:[]
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=100')
        .then( ({ data }) => {
          const rows = [];

            data.results.forEach( employee => {
                const rowData = {
                    name: employee.name,
                    phone: employee.phone,
                    email: employee.email,
                    dob: employee.dob,
                    avatar: employee.picture.thumbnail
                } 
                rows.push(rowData);
            })
            this.setState({ employees: rows })            
        })
    }

    render() {
        return (
            <div>
                <Table data={this.state.employees}/>
            </div>
        )
    }
}

export default Employees
