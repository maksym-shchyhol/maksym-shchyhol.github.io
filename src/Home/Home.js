import './Home.scss'
import '../index.scss'
import { Link } from 'react-router-dom'
import Years from '../Components/Years.js'

function Home() {
    return (
      <div id="home">
        <div class="container is-max-desktop">
          <div class="is-primary">
          <section class="hero">
            <div class="hero-body">
              <p class="title">
                Maksym Shchyhol
              </p>
              <p class="subtitle">
                Software developer
              </p>
            </div>
          </section>
          <div class="my-bio">
            <span>
Hi, my name is <b>Maksym</b>. I'm a developer, team lead, and software architect with
<Years class="full-stack-years" digits="8" startDate="Aug 1, 2012"/>years of experience in software development,
<Years class="developer-years" digits="0"startDate="Oct 1, 2015" />years of which obtained taking full-stack and leading positions.
I'm from Ukraine, have lived and worked in Malta.
I love to travel, enjoy diversity, and always looking for an opportunity to learn something new.
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