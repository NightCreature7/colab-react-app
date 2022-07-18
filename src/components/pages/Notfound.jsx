import notFound from "../../styles/Notfound.module.css";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className={notFound.main}>
      <h1 className={notFound.headerOne}>Oops!</h1>
      <h2 className={notFound.headerTwo}>404 - Page not found!</h2>
      <Link to="/">
        <button className={notFound.btn}>BACK TO HOME</button>
      </Link>
    </div>
  );
}

export default Notfound;
