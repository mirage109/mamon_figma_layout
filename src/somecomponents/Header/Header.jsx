import classes from "./header.module.css";
import mamonlogo from "../images/mamon-logo.svg";
import { Button } from "../Button/Button";
export const Header = () => {
  return (
    <header className={classes.headerContainer}>
      <div className={classes.logoContainer}>
        <img src={mamonlogo} alt="mamonLogo" />
        <h1 className={classes.title}>mamon</h1>
      </div>
      <nav>
        <ul className={classes.li}>
          <li>Services</li>
          <li>Clients</li>
          <li>Our team</li>
          <li>
            <Button />
          </li>
        </ul>
      </nav>
    </header>
  );
};
