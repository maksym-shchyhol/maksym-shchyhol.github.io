import '../index.scss'
import '../Styles/main.scss'
import './Home.scss'
import { Link } from 'react-router-dom'
import Years from '../Components/Years.js'

function Home() {
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
                Software developer
              </p>
            </div>
          </section>
          <div className="main-text">
            <span>
Hi, my name is <b>Maksym</b>. I'm a developer, team lead, and software architect with
{' '}<Years className="full-stack-years" digits="8" startDate="Aug 1, 2012"/>{' '}years of experience in software development,
{' '}<Years className="developer-years" digits="0"startDate="Oct 1, 2015" />{' '}years of it in a full-stack and leading positions.
I'm from Ukraine and have lived and worked in Malta.
I love to travel, enjoy diversity, and always look for an opportunity to learn something new.
My passion is software development using the <b>.NET stack</b> and <b>JavaScript</b> with front-end frameworks like <b>Angular</b> and <b>React</b>.
I'm highly competent in modern programming languages, applications, infrastructure, and tools like Kubernetes, Docker, SQL, Redis, Elasticsearch, queuing systems, e.t.c.
You're always welcome to check <b><Link to="/skills">my skills here</Link></b>. Moreover, feel free to <b><Link to="/contact">contact me</Link></b>.
I'm sure we might be helpful to each other.
<br/><br/>
Peace. 💙💛
            </span>
          </div>
        </div>
      </div>
    </div>
    );
  }
  
  export default Home;