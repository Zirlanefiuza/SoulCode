import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-description">
        Siga-nos nas redes sociais para ficar atualizado.
        </p>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/zirlane-fiuza/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/zilanefiuza"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <i className="ri-instagram-fill"></i>
          </a>
        </div>
        <p className="footer-copyright">
          <i className="ri-copyright-line"></i> 2024 Blog
        </p>
      </div>
    </footer>
  );
}

export default Footer;
