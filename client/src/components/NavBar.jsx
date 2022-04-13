import React from 'react';


const NavBar = () => {
    return (
        <header className="header">
        <nav className="nav">
          <a href="#" className="logo">bB.log()</a>
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/login">LogIn</a></li>
            <li><a href="/register">SignUp</a></li>
            <li><a href="/create">Create Post</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    );
};

export default NavBar;