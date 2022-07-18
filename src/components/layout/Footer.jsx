import React from "react";
import footerStyle from "../../styles/Footer.module.css";
import { Link } from "react-router-dom";
import fb from "../../img/fb.png";
import lin from "../../img/lin.jpg";
import twitter from "../../img/twitter.png";
import insta from "../../img/insta.png";
import bottom from "../../img/bottom.png";

function Footer() {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.main}>
        <h4 className={footerStyle.header}>POLICIES</h4>
        <Link to="">
          <h5 className={footerStyle.headersub}>Privacy Policy(GDPR)</h5>
        </Link>
        <Link to="">
          <h5 className={footerStyle.headersub}>Accessibility</h5>
        </Link>
      </div>
      <div className={footerStyle.mainleft}>
        <h4 className={footerStyle.header}>CONTACT US</h4>
        <h5 className={footerStyle.headersub}>+353 74 918 6702</h5>
        <Link to="">
          <h5 className={footerStyle.headersubblue}>info@colab.ie</h5>
        </Link>
        <h5 className={footerStyle.headersub}>
          CoLab, LYIT, Port Road, Letterkenny, Co.Donegal F92 C5XK
        </h5>
      </div>
      <div className={footerStyle.mainright}>
        <h4 className={footerStyle.header}>FOLLOW US</h4>
        <img className={footerStyle.image} src={fb} alt="Facebook" />
        <img className={footerStyle.imagetwo} src={lin} alt="LinkedIn" />
        <img className={footerStyle.imagethree} src={twitter} alt="Twitter" />
        <img className={footerStyle.imagefour} src={insta} alt="Instagram" />
        <div className={footerStyle.bottom}>
          <img
            className={footerStyle.imagebottom}
            src={bottom}
            alt="Atlantic Tech University"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
