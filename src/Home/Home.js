import '../index.scss'
import '../Styles/main.scss'
import './Home.scss'
import { Link } from 'react-router-dom'
import Years from '../Components/Years.js'
import Analytics from '../Components/Analytics.js'

function Home() {
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
                Software developer
              </p>
            </div>
          </section>
          <div className="main-text">
            <span>
<p>Hi, my name is <b>Maksym</b> and I am a software developer with{' '}<Years className="full-stack-years" digits="8" startDate="Sep 1, 2008"/>{' '}years of experience in the field.
I have a strong background in full-stack development, with over {' '}<Years className="developer-years" digits="0"startDate="Oct 1, 2015" />{' '}years in this area, and have held leadership roles as a team lead and software architect.</p>
<p>I am originally from Ukraine and have lived and worked in Malta, where I gained valuable experience working with a diverse team and learning about new technologies and programming languages.</p>
<p>My passion is software development using the <b>.NET</b> stack and <b>JavaScript</b>, including front-end frameworks such as <b>Angular</b> and <b>React</b>. I am highly skilled in modern programming languages, applications, infrastructure, and tools such as Kubernetes, Docker, SQL, Redis, Elasticsearch, queuing systems, and more.</p>
<p>I am always looking for opportunities to learn and grow as a developer. I am a fast learner and have a strong work ethic. I am a team player and enjoy working with others to solve problems and create innovative solutions.</p>
<p>Please feel free to check out <b><Link to="/skills">my skills</Link></b> or <b><Link to="/contact">contact me</Link></b> for further information. I am confident that by working together, we can make a positive impact in the world. 💙💛</p>
            </span>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default Home;
