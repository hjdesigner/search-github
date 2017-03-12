import React, { Component } from 'react';
import logoGithub from '../images/github.svg';
import logoFacebook from '../images/facebook.svg';
import logoTwitter from '../images/twitter.svg';
import logoCodepen from '../images/codepen.svg';
import logoLinkedin from '../images/linkedin.svg';
import logoYoutube from '../images/youtube.svg';

export default class Footer extends Component{
  render(){
    return(
      <div>
      <p>Feito com muito <span className="coracao"></span></p>

      <nav className="social">
        <ul>
          <li>
            <a href="https://www.github.com/hjdesigner" target="_blank">
              <img src={logoGithub} alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/hjFrontEnd" target="_blank">
              <img src={logoFacebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/coisadedev" target="_blank">
              <img src={logoTwitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/hjdesigner/" target="_blank">
              <img src={logoCodepen} alt="Codepen" />
            </a>
          </li>
          <li>
            <a href="https://br.linkedin.com/in/coisadedev" target="_blank">
              <img src={logoLinkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UC4W-b9Q1I0mzGGzFKOu-66g" target="_blank">
              <img src={logoYoutube} alt="Youtube" />
            </a>
          </li>
          </ul>
        </nav>
      </div>
    );
  }
}
