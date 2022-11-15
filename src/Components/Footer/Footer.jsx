import React from "react";
import "./footer.css";
import image1 from "../../images/Vector1.svg"
import image2 from "../../images/Vector2.svg"
const Footer = () => {

  return (
    <footer >
      <section className="container">
        <div className="items">
          <div className="footer_row">
            <div className="footer_col1 contain">
              <div>
                <img src={image1} alt="image1" />
                <img src={image2} alt="image2" />
              </div>
              <div className="social">
                <i class="uil uil-facebook-f"></i>
                <i class="uil uil-instagram"></i>
                <i class="uil uil-twitter"></i>
              </div>
              <div className="timestamp">© 2022 Metabnb
              </div>
            </div>
            <div className="footer_col1">
              <h4>Community</h4>
              <a href="m">NFT</a>
              <a href="m">Tokens</a>
              <a href="m">Tokens</a>
              <a href="m">Discord</a>
            </div>
            <div className="footer_col1">
              <h4>Places</h4>
              <a href="m">Castle</a>
              <a href="m">Farms</a>
              <a href="m">Beach</a>
              <a href="m">Learn more</a>
            </div>
            <div className="footer_col1">
              <h4>Community</h4>
              <a href="m">Road map</a>
              <a href="m">Creators</a>
              <a href="m">Career</a>
              <a href="m">Contact us</a>
            </div>
          </div>
        </div>
      </section>

    </footer>
  );
};

export default Footer;
