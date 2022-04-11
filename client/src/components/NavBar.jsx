import React from 'react';

const NavBar = () => {
    return (
        <header class="header">
        <nav class="nav">
          <a href="#" class="logo">bB.log()</a>
          <ul class="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/login">LogIn</a></li>
            <li><a href="#">SignUp</a></li>
            <li><a href="#">Create Post</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </nav>
      </header>
    );
};

export default NavBar;