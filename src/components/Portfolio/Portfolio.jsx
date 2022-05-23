import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">

        <ScrollAnimation animateIn="flipInY">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/anthonycg/blog" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
                <a href="https://github.com/anthonycg/blog" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="blog CRUD site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Blog Website</h3>
              <p> CRUD website that pulls data from Medium.com's API.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>MySQL</li>
                <li>Flask</li>
                <li>API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/anthonycg/box-generator" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Box Generator</h3>
              <p>Early React website that adds a square based on user's input of the square's color.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React </li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInY">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/anthonycg/todo-list" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
                <a href="https://github.com/anthonycg/todo-list" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="todo list" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>To Do List</h3>
              <p>To Do list using React, state, and hooks.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/anthonycg" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visitar site" />
                </a>
                <a href="https://github.com/anthonycg" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio</h3>
              <p>This portfolio was a project.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                {/* <a href="https://github.com/" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a> */}
                <a href="https://github.com/anthonycg" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="project" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Project</h3>
              <p>
                I'll add anothe project this week.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                {/* <a href="https://github.com/" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a> */}
                <a href="https://github.com/anthonycg" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="website" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Project</h3>
              <p> Need to add another project here. Preferably a collab.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaSript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}