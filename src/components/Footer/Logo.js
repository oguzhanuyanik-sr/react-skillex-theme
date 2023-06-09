import './Logo.css';
import React from 'react'

function Logo(props) {
  return (
    <div className="logo-container">
        <a href="/"><img className="logo-image" src={props.src} alt={props.alt} /></a>
    </div>
  )
}

export default Logo