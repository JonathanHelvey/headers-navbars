import React, { useState, useEffect } from 'react'

function Header2() {
const [color, setColor] = useState("header")

const listenScrollEvent = (event) => {
  if (window.scrollY < 200) {
    return setColor("header")
  } else {
    return setColor("header2")
  }
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);

  return (
    <header className={color}>
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