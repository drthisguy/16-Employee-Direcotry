import React from 'react'


export default function Row(props) {
    return (
        <React.Fragment> 
            <td><img src={props.data.avatar} alt={'Employee Avatar'}></img></td>
            <td>{props.data.name.first}{' '}{props.data.name.last}</td>
            <td>{props.data.phone}</td>
            <td>{props.data.email}</td>
            <td>{props.data.age}</td>
        </React.Fragment>
    )
}
