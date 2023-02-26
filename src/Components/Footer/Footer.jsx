import "./style.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-1">
          <img src="/assets/footer.svg" alt="footer logo" className="" />
        </div>
        <div className="footer-sub">
          <div className="f-head">Features</div>
          <div className="f-links">
            <div className="fa">
              <a href="#" className="">
                Link Shortening
              </a>
            </div>
            <div className="fa">
              <a href="#" className="">
                Branded Links
              </a>
            </div>
            <div className="fa">
              <a href="#" className="">
                Analytics
              </a>
            </div>
          </div>
        </div>
        <div className="footer-sub">
          <div className="f-head">Resources</div>
          <div className="f-links">
            <div className="fa">
              <a href="#" className="">
                Blog
              </a>
            </div>
            <div className="fa">
              <a href="#" className="">
                Developers
              </a>
            </div>
            <div className="fa">
              <a href="#" className="">
                Support
              </a>
            </div>
          </div>
        </div>
        <div className="footer-sub">
          <div className="f-head">Company</div>
          <div className="f-links">
            <div className="fa">
              <a href="#" className="">
                About
              </a>
            </div>
            <div className="fa">
              <a href="#" className="">
                Our Team
              </a>
            </div>
            <div className="fa">
              <a href="#" className="">
                Careers
              </a>
            </div>
            <div className="fa">
              <a href="#" className="">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="socials">
          <a href="#" className="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a href="#" className="">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
