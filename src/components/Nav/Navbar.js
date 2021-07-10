import React from 'react'

export default function Navbar() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-shrink">
          <div class="container">
            <a class="navbar-brand" href="#">
              Pi Hub
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
                  <a class="nav-link active" href="index.html">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pi Pay
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pi Mall
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pi Exchange
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="toggle-theme">
          <i class="fas"></i>
        </div>
      </div>
    );
}
