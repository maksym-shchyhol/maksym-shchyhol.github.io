import './Navbar.scss'
import '../Styles/mystyles.scss'

import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
            
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <a class="navbar-item">
                  <Link to="/">About</Link>
                  </a>
                  <a class="navbar-item">
                  <Link to="/contact">Contact</Link>
                  </a>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a class="button is-primary">
                        <strong>Download CV</strong>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
    );
  }
  
  export default Navbar;