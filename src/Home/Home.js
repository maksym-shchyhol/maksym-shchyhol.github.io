import './Home.scss'
import '../index.scss'
import { Link } from 'react-router-dom'

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
          <section class="hero">
            <div class="hero-body">
            <span id="my-bio">
Hi, my name is <b>Maksym</b>.
I'm a full-stack developer, team lead, and software architect with
<span id="bio-years"> 10+</span> years of work experience.
I'm from Ukraine, have lived and worked in Malta.
I love to travel, enjoy diversity, and always aim to learn something new.
My passion is software development using the <b>.NET stack</b> and <b>JavaScript</b> with front-end frameworks like <b>Angular</b> and <b>React</b>.
I have a great experience with modern programming languages, applications, infrastructure, and tools like Kubernetes, Docker, SQL, Redis, Elasticsearch, queuing systems, e.t.c.
I welcome you to check my <b><Link to="/skills">skills here</Link></b>. Moreover, feel free to <b><Link to="/contact">contact me</Link></b>.
I'm sure we might be helpful to each other.
<br/><br/>
Peace. 💙💛
            </span>
            </div>
          </section>
          </div>
        </div>
      </div>
      
    );
  }
  
  export default Home;