import axios from "axios";
import React from "react";
import Rstyle from "../../styles/Newsevents.module.css";

const baseURL = "http://localhost:5000/news";

export default function Femaleentrepreneur() {
  const [news, setNews] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNews(response.data);
    });
  }, []);
  console.log(news);

  if (!news) return null;

  return (
    <main>
      <main>
        <div className={Rstyle.main}>
          <h1>{news[3].title}</h1>
        </div>
        <div className={Rstyle.main}>
          <h5>{news[3].date}</h5>
        </div>
        <div className={Rstyle.main}>
          <img
            className={Rstyle.image}
            src={news[3].img}
            alt="Recruitment Day"
          />
        </div>
        <div className={Rstyle.main}>
          <p className={Rstyle.paragraph}>{news[3].content}</p>
        </div>
      </main>
    </main>
  );
}
