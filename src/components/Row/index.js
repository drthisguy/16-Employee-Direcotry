import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


export default function Row({ data }) {
    return (
        <Router >
        <React.Fragment> 
            <td><img src={data.avatar} alt={'Employee Avatar'}></img></td>
            <td>{data.name.first}{' '}{data.name.last}</td>
            <td>{data.phone}</td>
            <td><Link to={`mailto:${data.email}`}>{data.email}</Link></td>
            <td>{data.age}</td>
        </React.Fragment>
        </Router>
    )
}
