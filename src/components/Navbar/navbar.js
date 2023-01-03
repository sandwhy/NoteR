import React from 'react'

import "./styles.css"

const navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__logo'>
            <h1 className='Navbar__logo-img'>N</h1>
        </div>
        <div className='navbar__links_container'>
            <p><a>---</a></p>
            <p><a>---</a></p>
            <p><a>---</a></p>
        </div>
    </div>
  )
}

export default navbar