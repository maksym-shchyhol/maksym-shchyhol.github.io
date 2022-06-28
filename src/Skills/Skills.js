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
              <div class="content is-normal">
                <h4>Hard Skills:</h4>
                <ul>
                  <li>C# / .NET Core / SQL / LINQ</li>
                  <li>Entity Framework / Dapper</li>
                  <li>ASP.NET MVC / WEB API</li>
                  <li>HTML / CSS / JavaScript</li>
                  <li>Angular / React / jQuery</li>
                  <li>MongoDB / MSSQL / Node.JS</li>
                  <li>Docker / Kubernetes / Azure</li>
                  <li>Redis / Elastic Search / AWS</li>
                  <li>Jira / VSTS / Pipelines</li>
                  <li>NuGet / Octopus / CI / DI</li>
                  <li>Git / Bitbucket</li>
                </ul>
                <h4>Soft Skills:</h4>
                <ul>
                  <li>Teamwork</li>
                  <li>Leadership</li>
                  <li>Hard-working</li>
                  <li>Effective time management</li>
                  <li>Adaptability</li>
                  <li>Critical thinking</li>
                  <li>Problem solving</li>
                  <li>Fast learning</li>
                </ul>
                <br/><br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Skills;