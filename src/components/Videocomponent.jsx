import ReactPlayer from "react-player";
import heroVideo from "../video/video_4.mp4";
import vidStyle from "../styles/Videocomponent.module.css";

function Videocomponent() {
  return (
    <div className={vidStyle.vid}>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <a
        href="https://www.youtube.com/watch?v=XoQzmJJyELc"
        target="_blank"
        rel="noreferrer"
      >
        <button className={vidStyle.btn}>Colab in 60 seconds</button>
      </a>
      <div className={vidStyle.overlay}></div>
    </div>
  );
}

export default Videocomponent;
