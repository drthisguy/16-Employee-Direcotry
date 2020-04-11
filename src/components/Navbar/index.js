import React from 'react';
  

export default function Navbar() {
    return (
        <header style={style}>
            <h1>Company Directory</h1>
        </header>
    )
}

const style = {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "15px",
    borderBottom: "5px solid tomato",
    marginBottom: "5rem",
    fontFamily: "Georgia, Times New Roman', Times, serif"
}