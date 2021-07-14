import React from 'react'

export default function Footer() {
    return (
      <div>
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-col">
                  <h3>About Us</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="footer-col">
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="#">Latest Blogs</a>
                    </li>
                    <li>
                      <a href="#">Apps Services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="footer-col">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Video Tutorials</a>
                    </li>
                    <li>
                      <a href="#">FAQ's</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="footer-col">
                  <h3>Social Pages</h3>
                  <ul>
                    <li>
                      <a href="#">
                        facebook{" "}
                        <i class="fab fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        twitter{" "}
                        <i class="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        instagram{" "}
                        <i class="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        linkedin{" "}
                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <p class="copyright-text">&copy;2021 @ PiHub</p>
              </div>
            </div>
          </div>
        </footer>
        <div class="toggle-theme">
          <i class="fas"></i>
        </div>
      </div>
    );
}
