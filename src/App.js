import logo from './logo.svg';
import './App.css';
import './stylesheet.css';

function App() {
  return (
    <div>
        <nav className="navbar card is-dark" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="1df.jpg" width={35} height={60} />
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Experience
              </a><div className="navbar-item has-dropdown is-hoverable"><a className="navbar-item">
                </a><a className="navbar-link">
                  More
                </a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    personal details
                  </a>
                  <a className="navbar-item">
                    Educational details
                  </a>
                  <a className="navbar-item">
                    Contact me
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">
                    Comment to me
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary is-light is-rounded is-outlined">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light is-link is-rounded is-outlined">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered has-background-grey-light">
              <div className="column is-two-third">
                <p className="title is-2">
                  <i>Hi! I'm</i>
                </p>
                <p className="title is-1 has-text-black">
                  <b>Venuri Devduni Edirisinghe</b>
                </p>
                <p className="subtitle has-text-grey-dark">
                  A Tech Enthusiast &amp; an Environmental Lover
                </p>
              </div>
              <div className="column is-one-third">
                <img className="is-rounded" src="3.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                  <p className="title is-size-4">About me...</p>
                  <p className="subtitle is-size-5">I'm an undergraduate of UCSC in Information Systems degree</p>
                </article>
                <article className="tile is-child notification is-warning">
                  <p className="title">Find me...</p>
                  <p className="content">https://www.facebook.com/venuri.edirisinghe.1?mibextid=ZbWKwL</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                  <p className="title">Education</p>
                  <p /><ul>
                    <li><font color="black">Higher Education</font>-<br />University of Colombo</li>
                    <li><font color="black">Secondary Education</font>-<br />Viharamahadevi Balika Vidyalaya<br />Vishaka Balika Vidyalaya</li>
                    <li><font color="black">Primary Education</font>-<br />Mahamaya Balika Vidyalaya</li>
                  </ul><p />
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                <p className="title">Educational Details</p>
                <p className="subtitle has-text-grey-darker"><u>Ordinary Level</u></p>
                <div className="content">
                  8A and 1C
                </div>
                <p className="subtitle has-text-grey-darker"><u>Advanced Level</u></p>
                <div className="content">
                  Physical stream
                  <ol><li>Combined Mathemantics- C</li>
                    <li>Physics- B</li>
                    <li>Chemistry- B</li></ol>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-success">
              <div className="content">
                <p className="title">Details</p>
                <p className="content" /><ul>
                  <li>Fullname : Edirisinghe Mudiyanselage Venuri Devduni Edirisinghe</li>
                  <li>Age : 22 years</li>
                  <li>Address : 156/2, Jupiter Lane, Gampaha</li>
                  <li>Contact no : 0776554356</li>
                  <li>Email : venuriedirisinghe@gmail.com</li>
                </ul>
                <p />
                <figure className="image is-4by3">
                  <img src="123.jpg" />
                </figure>
                <div className="content">
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
  );
}

export default App;
