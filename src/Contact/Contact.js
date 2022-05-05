import '../index.scss'
import '../Styles/main.scss'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'

function Contact() {
    return (
      <div id="main">
        <div className="container is-max-desktop">
          <div className="is-primary">
            <section className="hero">
              <div className="hero-body">
                <p className="title">
                  Maksym Shchyhol
                </p>
                <p className="subtitle">
                  Contact me
                </p>
              </div>
            </section>
            <div className="main-text">
              <div>
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBell} />
                  </span>
                  <a href="tel:+380938985489">+380938985489</a>
                </span>
              </div>
              <div>
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <a href="mailto: maksymshchyhol@gmail.com">maksymshchyhol@gmail.com</a>
                </span>
              </div>
              <div>
                <span className="icon-text">
                  <span className="icon">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>
                  <a href='https://www.linkedin.com/in/shchyhol/'>Linkedin</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Contact;