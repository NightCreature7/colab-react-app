import axios from "axios";
import React from "react";
import Rstyle from "../../styles/Newsevents.module.css";

const baseURL = "https://colab-react-app.vercel.app//news";

export default function Adviceleaders() {
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
          <h1>{news[2].title}</h1>
        </div>
        <div className={Rstyle.main}>
          <h5>{news[2].date}</h5>
        </div>
        <div className={Rstyle.main}>
          <img src={news[2].img} alt="Recruitment Day" />
        </div>
        <div className={Rstyle.main}>
          <p className={Rstyle.paragraph}>{news[2].content}</p>
        </div>
      </main>
    </main>
  );
}
