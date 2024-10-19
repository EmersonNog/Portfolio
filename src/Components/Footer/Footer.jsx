import AnimatedSection from "../../Components/Animate/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  const date = new Date();
  const ano_atual = date.getFullYear();

  return (
    <footer className="footer-container">
      <AnimatedSection direction="left" duration={5}>
        <p>©️ Emerson Nogueira {ano_atual}</p>
        <div className="social-icons">
          <div className="icon-box">
            <a
              href="https://github.com/EmersonNog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </div>
          <div className="icon-box">
            <a href="mailto:catce.nogueira@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
          </div>
          <div className="icon-box">
            <a
              href="https://api.whatsapp.com/send/?phone=5589999339734"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </a>
          </div>
          <div className="icon-box">
            <a
              href="https://linkedin.com/in/noggueira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
          <div className="icon-box">
            <a
              href="https://www.instagram.com/noggueira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}

export default Footer;
