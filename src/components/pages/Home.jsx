import React from "react";
import Videocomponent from "../Videocomponent";
import Videocomponentsmallscreen from "../Videocomponentsmallscreens";
import Card from "../Card";
import aboutStyle from "../../styles/Home.module.css";
import aboutOne from "../../img/aboutOne.png";
import aboutTwo from "../../img/aboutTwo.png";
import aboutThree from "../../img/aboutThree.png";
import aboutFour from "../../img/aboutFour.png";
import imgOne from "../../img/first.jpg";
import imgTwo from "../../img/second.jpg";
import imgThree from "../../img/third-2.jpg";
import imgFour from "../../img/four.jpg";
import imgFive from "../../img/fifth.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <Videocomponentsmallscreen />
      <Videocomponent />
      <div className={aboutStyle.aboutMain}>
        <span className={aboutStyle.span}>
          <p className={aboutStyle.paragraph}>
            Colab is space, team and network of supports and expertise, all
            working to give your new or growing business the best chance of
            success.
          </p>
        </span>
      </div>
      <div className={aboutStyle.row}>
        <div className={aboutStyle.column}>
          <img className={aboutStyle.image} src={aboutOne} alt="CoLab About" />
          <div className={aboutStyle.centered}>
            Business start-up support and expansion supports
          </div>
        </div>
        <div className={aboutStyle.column}>
          <img className={aboutStyle.image} src={aboutTwo} alt="CoLab About" />
          <div className={aboutStyle.centered}>
            Connect with a network of over 100 companies
          </div>
        </div>
        <div className={aboutStyle.column}>
          <img
            className={aboutStyle.image}
            src={aboutThree}
            alt="CoLab About"
          />
          <div className={aboutStyle.centered}>
            A culture of support and knowledge exchange
          </div>
        </div>
        <div className={aboutStyle.column}>
          <img className={aboutStyle.image} src={aboutFour} alt="CoLab About" />
          <div className={aboutStyle.centered}>
            Modern, flexible workspace and facilities
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
      <div className={aboutStyle.container}>
        <div className={aboutStyle.containerSub}>
          <img className={aboutStyle.images} src={imgOne} alt="CoLab Img One" />
          <div className={aboutStyle.imgSection}>
            <h5 className={aboutStyle.sectheader}>COLAB CLIENTS</h5>
            <h2 className={aboutStyle.sectpara}>CoLab Clients</h2>
            <p>From individual start-ups to 20+ and going international...</p>
          </div>
        </div>
        <div className={aboutStyle.containerSubTwo}>
          <img className={aboutStyle.images} src={imgTwo} alt="CoLab Img Two" />
          <div className={aboutStyle.imgSectionTwo}>
            <h5 className={aboutStyle.sectheader}>
              ABOUT COLAB - COLAB FACILITIES
            </h5>
            <h2 className={aboutStyle.sectpara}>CoLab Facilities</h2>
            <p>
              Flexible spaces, meeting rooms and the everything else you need.
            </p>
          </div>
        </div>
        <div className={aboutStyle.containerSubThree}>
          <img
            className={aboutStyle.imagethree}
            src={imgThree}
            alt="CoLab Img Three"
          />
          <div className={aboutStyle.imgSectionThree}>
            <h5 className={aboutStyle.sectheader}>
              BUSINESS & LIFE IN DONEGAL
            </h5>
            <h2 className={aboutStyle.sectpara}>Business in Donegal</h2>
            <p>
              From high-tech multinationals to no-tech fresh air, Donegal is a
              fantastic location for businesses.
            </p>
          </div>
        </div>
        <div className={aboutStyle.containerSubFour}>
          <Link to="/research-colab">
            <img
              className={aboutStyle.images}
              src={imgFour}
              alt="CoLab Img Four"
            />
            <div className={aboutStyle.imgSectionFour}>
              <h5 className={aboutStyle.sectheader}>RESEARCH</h5>
              <h2 className={aboutStyle.sectpara}>Research @ Colab</h2>
              <p>
                Learn more the range of research activities and opportunities in
                CoLab, and make sure to join us now.
              </p>
            </div>
          </Link>
        </div>
        <div className={aboutStyle.containerSubFive}>
          <img
            className={aboutStyle.images}
            src={imgFive}
            alt="CoLab Img Five"
          />
          <div className={aboutStyle.imgSectionFive}>
            <h5 className={aboutStyle.sectheader}>ABOUT COLAB - JOIN COLAB</h5>
            <h2 className={aboutStyle.sectpara}>Join Colab</h2>
            <p>
              Learn more about our office space options, arrange a virtual tour
              or a time to come in and visit CoLab.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
