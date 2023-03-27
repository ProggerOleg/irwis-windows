import React from 'react'

export default function Header() {
  return (
    <header>
        <div className='first_row'>
            <span className='logo'>My portfolio</span>
            <ul className='nav'>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>User room</li>
            </ul>
        </div>
        <div className='presentation'></div>
        <div className='show_image1'></div>
        <div className='show_image2'></div>
    </header>
  )
}
