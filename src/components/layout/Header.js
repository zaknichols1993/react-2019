import React from 'react'

function Header() {
  return (
    <div>
      <h1 style={headerStyle}>Stupid Todo App</h1>
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