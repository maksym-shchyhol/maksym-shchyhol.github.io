import '../index.scss'
import '../Styles/main.scss'
import './Skills.scss'
import Analytics from '../Components/Analytics.js'

function Skills() {
    return (
      <div id="main">
        <Analytics/>
        <div className="container is-max-desktop">
          <div className="is-primary">
            <section className="hero">
              <div className="hero-body">
                <p className="title">
                  Maksym Shchyhol
                </p>
                <p className="subtitle">
                  My skills
                </p>
              </div>
            </section>
            <div className="main-text">
              <span>
                Skills page
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skills;