import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import whatsapp from '../../assets/whatsapp.png'
import telegram from '../../assets/telegram.png'
import instagramIcon from '../../assets/instagram.png'
import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Anthony</span>
        <span>Gibson II</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/anthony-gibson-437a97b4/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/anthonycg"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        {/* <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a> */}

        {/* <a
          href="https://discord.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a> */}
      </div>
    </Container>
  )
}
