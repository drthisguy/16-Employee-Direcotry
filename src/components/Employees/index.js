import React, { Component } from 'react'
import axios from 'axios'

export class Employees extends Component {

    state = {
        employees: []
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=100')
        .then( ({ data }) => this.setState({ employees: data }))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Employees
