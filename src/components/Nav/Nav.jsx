import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div>
        <nav>
            <div className='nav-list'>
              <p><Link to='/'>Home</Link></p>
              <p><Link to='/second'>second</Link></p>
              <p><Link to='/third'>third</Link></p>
              <p><Link to='/fourth'>fourth</Link></p>
              <p><Link to='/state'>states</Link></p>
            </div>
        </nav>
    </div>
  )
}

export default Nav