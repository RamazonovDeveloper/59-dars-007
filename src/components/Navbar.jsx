import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=''>
      <ul className='flex gap-10 items-center'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/products'}>Products</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
