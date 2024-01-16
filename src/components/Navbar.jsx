import React from 'react'

export const Navbar = () => {
  return (
    <nav className={StyleSheet.navbar}>
        <a href='/'>Portfolio</a>
        <div>
            <ul>
            <li><a href='#about'></a>About</li>
            <li><a href='#about'></a>Experience</li>
            <li><a href='#about'></a>Projects</li>
            <li><a href='#about'></a>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

