import axios from "axios";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cardstyle from "../styles/Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const baseURL =
  "https://my-json-server.typicode.com/NightCreature7/colab-nextjs/news";

export default function Card() {
  const [news, setNews] = React.useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNews(response.data);
    });
  }, []);

  console.log(news);

  if (!news) return null;

  return loading === false ? (
    <div className={Cardstyle.bg}>
      <h2 className={Cardstyle.header}>Latest News & Events</h2>
      <div className={Cardstyle.main}>
        <div className="carousel-container">
          <Carousel
            infiniteLoop
            autoPlay
            useKeyboardArrows
            centerMode
            dynamicHeight
          >
            <Link to="/recruitment-day" target="_blank">
              <div>
                <img
                  className={Cardstyle.image}
                  src={news[0].img}
                  alt="Carousel - One"
                />
                <p className="legend">{news[0].title}</p>
              </div>
            </Link>
            <Link to="/authentic-communication" target="_blank">
              <div>
                <img
                  className={Cardstyle.image}
                  src={news[1].img}
                  alt="Carousel - Two"
                />
                <p className="legend">{news[1].title}</p>
              </div>
            </Link>
            <Link to="/advice-leaders" target="_blank">
              <div>
                <img
                  className={Cardstyle.image}
                  src={news[2].img}
                  alt="Carousel"
                />
                <p className="legend">{news[2].title}</p>
              </div>
            </Link>
            <Link to="/female-entrepreneurs" target="_blank">
              <div>
                <img
                  className={Cardstyle.image}
                  src={news[3].img}
                  alt="Carousel"
                />
                <p className="legend">{news[3].title}</p>
              </div>
            </Link>
          </Carousel>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
}
