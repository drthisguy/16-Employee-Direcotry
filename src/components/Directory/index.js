import React, { Component } from 'react'
import axios from 'axios'
import Table from '../Table'
import SearchField from '../Search'


export default class Directory extends Component {

    state = {
        queried: [],
        employees:[],
        query: ""
    }

    onSearch = (e) => {
        this.setState({ [e.target.name]: e.target.value })

        const all = this.state.queried,
          first = all.filter(x => x.name.first.includes(e.target.value)),
          last = all.filter(x => x.name.last.includes(e.target.value)),

          results = [...first, ...last];
          
        this.setState({ employees: results })
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
            this.setState({ queried: rows })            
        })
    }

    render() {
        return (
            <div>
                <SearchField value={this.state.query} onSearch={this.onSearch}/>
                <Table data={this.state.employees}/>
            </div>
        )
    }
}