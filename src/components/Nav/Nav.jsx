import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div>
        <nav>
            <div className='nav-list'>
              <p><Link to='/'>Home</Link></p>
              <p><Link to='/second'>Second</Link></p>
              <p><Link to='/third'>Third</Link></p>
              <p><Link to='/fourth'>Fourth</Link></p>
            </div>
        </nav>
    </div>
  )
}

export default Nav