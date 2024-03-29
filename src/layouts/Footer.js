const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer id="footer">
      <div className="footer_top">
        <a href="#" onClick={() => scrollTop()} className="resumo_fn_totop">
          <span />
        </a>
      </div>
      <div className="footer_content">
        <div className="container">
          <p>
            Copyright © {new Date().getFullYear()}. All rights reserved. <br />
            Developed by{" "}
            <a
              className="fn__link"
              href="https://www.upwork.com/freelancers/~017ed2a296df38b709"
              target="_blank"
              rel="noreferrer"
            >
              Daniel Sanchez
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
