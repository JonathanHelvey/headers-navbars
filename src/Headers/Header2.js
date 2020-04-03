import React, { useState, useEffect } from 'react'

import "./Header.css"

function Header2() {
const [header, setHeader] = useState("header")

const listenScrollEvent = (event) => {
  if (window.scrollY < 73) {
    return setHeader("header")
  } else if (window.scrollY > 70) {
    return setHeader("header2")
  } 
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);

  return (
    <header className={header}>
      <div className="logo">Logo</div>
      <ul className="links">
        <li className="link-item">home</li>
        <li className="link-item">about</li>
        <li className="link-item">join</li>
      </ul>
    </header>
  );
}

export default Header2;