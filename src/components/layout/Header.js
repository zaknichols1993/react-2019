import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1 style={headerStyle}>Stupid Todo App</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

const headerStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

export default Header;