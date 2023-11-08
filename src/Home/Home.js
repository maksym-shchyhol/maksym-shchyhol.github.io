import '../index.scss'
import '../Styles/main.scss'
import './Home.scss'
import { Link } from 'react-router-dom'
import Years from '../Components/Years.js'
import Analytics from '../Components/Analytics.js'

function Home() {
  return (
    <div id="main">
      <Analytics />
      <div className="container is-max-desktop">
        <div className="is-primary">
          <section className="hero">
            <div className="hero-body">
              <p className="title">
                Maksym Shchyhol
              </p>
              <p className="subtitle">
                Software developer
              </p>
            </div>
          </section>
          <div className="main-text">
            <span>
              <p>Hi, my name is <b>Maksym</b>, and I've been in the software development for{' '}<Years className="full-stack-years" digits="8" startDate="Sep 1, 2008" />{' '}years.</p>
              <p>While my expertise predominantly centers on web development, with a particular emphasis on highly efficient back-end solutions, my experience also extends to desktop and mobile development, team leadership, and software architecture design.</p>
              <p>My key areas of expertise spin around <b>.NET/C#, JavaScript, HTML, CSS</b>, as well as front-end frameworks like <b>Angular and React.</b></p>
              <p>Additionally, I have a strong passion for infrastructure management and I've got my hands on all aspects needed to design, develop, host, and support projects of varying scales from the ground up.</p>
              <p>I am always looking for opportunities to learn and grow and enjoy working with others to solve problems and create innovative solutions.</p>
              <p>Please feel free to check out <b><Link to="/skills">my skills</Link></b> or <b><Link to="/contact">contact me</Link></b> for further information. I am confident that by working together, we can make a positive impact in the world. 💙💛</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
