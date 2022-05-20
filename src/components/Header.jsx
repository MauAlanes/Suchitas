import React from 'react'
import "../styles/Header.css"
import Logo from "../images/letra-s.png"

function Header() {
  return (
    <div className='header'>
      <img src={Logo} alt="Logo suchas" />
      <div className='list-header'>
        <li>Notas</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Whatsapp</li>
      </div>
    </div>
  )
}

export {Header}