import { Link } from "react-router-dom";
import navStyles from "../../styles/Navbar.module.css";
import logo from "../../img/logo.png";
import Menuitems from "./Menuitems";
import Menuitemstwo from "./Menuitemstwo";

function Navbar() {
  return (
    <div>
      <Link to="/" className={navStyles.linkStyle}>
        <img className={navStyles.image} src={logo} alt="CoLab Logo" />
      </Link>
      <div className={navStyles.navOne}>
        <div>
          <Menuitems />
          <Menuitemstwo />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
