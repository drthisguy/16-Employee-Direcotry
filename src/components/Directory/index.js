import React, { Component } from 'react'
import axios from 'axios'
import Table from '../Table'
import SearchField from '../Search'


export class Directory extends Component {

    state = {
        employees:[],
        query: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


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
                <SearchField value={this.state.query} onChange={this.onChange}/>
                <Table data={this.state.employees}/>
            </div>
        )
    }
}

export default Directory
