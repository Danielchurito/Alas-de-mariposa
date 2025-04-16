import sty from "./styles/Footer.module.css";

function Footer() {
  return (
    <footer className={sty.footer}>
      <div className={sty.footer_content}>
        <p>&copy; 2025 Alas de mariposa. All rights reserved.</p>
        <ul className={sty.social_media}>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/fundacion_alas_mariposa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
