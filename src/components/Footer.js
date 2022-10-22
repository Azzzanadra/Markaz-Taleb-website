import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <h2>تواصل معنا</h2>
        <div className="contacts">
          <span>markaz-taleb@gmail.com</span>
          <span>phone number</span>
          <Link className='link'>facebook-link</Link>
        </div>
    </div>
  )
}

export default Footer