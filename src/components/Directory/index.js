import React, { Component } from 'react'
import axios from 'axios'
import Table from '../Table'
import SearchField from '../Search'


export default class Directory extends Component {

    state = {
        queried: [],
        employees:[],
        query: "",
        nameIsSorted: false,
        ageIsSorted: false
    }

    onSearch = (e) => {
        this.setState({ [e.target.name]: e.target.value })

        const all = this.state.queried,
          first = all.filter(x => x.name.first.includes(e.target.value)),
          last = all.filter(x => x.name.last.includes(e.target.value)),

          results = [...first, ...last];
          
        this.setState({ employees: results })
    }

    sortNames = () => {
        this.setState({ nameIsSorted: !this.state.nameIsSorted })

            if(this.state.nameIsSorted) {
                this.unSortNames();
                return;
            }
        const results = this.state.queried.sort((a, b) => 

            (a.name.last < b.name.last) ? -1 
            : (a.name.last > b.name.last) ? 0 
            : 0
           )
        this.setState({ employees: results })
    }

    unSortNames = () => {
        this.setState({ nameIsSorted: !this.state.nameIsSorted })
                   
        const results = this.state.queried.sort((a, b) => 

            (a.name.last > b.name.last) ? -1 
            : (a.name.last < b.name.last) ? 0 
            : 0
           )
        this.setState({ employees: results })
    }

    sortAges = () => {
        this.setState({ ageIsSorted: !this.state.ageIsSorted})

        const results = this.state.queried.sort((a, b) => 
            this.state.ageIsSorted ? a.age - b.age : b.age - a.age)
         
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
                    age: employee.dob.age,
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
                <SearchField value={this.state.query} 
                    onSearch={this.onSearch}/>
                <Table data={this.state.employees}
                    nameIsSorted={this.state.nameIsSorted}
                    sortNames={this.sortNames}
                    ageIsSorted={this.state.ageIsSorted}
                    sortAges={this.sortAges}/>
            </div>
        )
    }
}