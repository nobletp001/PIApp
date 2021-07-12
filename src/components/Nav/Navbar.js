import React from 'react'

export default function Navbar() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-shrink">
          <div class="container">
            <a class="navbar-brand">
              <img
                className="center-block"
                src="img/phub3.png"
                width="50px"
                height="50px"
                alt="Pi Logo"
              />
              <span>Pi Hub </span>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link active">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Pi Pay</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Pi Mall</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Pi Exchange</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );  
}
