import logo from "../images/mamon-logo.svg";
import be from "../images/be.svg";
import box from "../images/box.svg";
import phones from "../images/phones.svg";
import inpic from "../images/inpic.svg";
import classes from "./footer.module.css"

export const Footer = () => {
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.footerLogo}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.socialIcons}>
        <img src={phones} alt="" />
        <img src={be} alt="" />
        <img src={inpic} alt="" />
        <img src={box} alt="" />
      </div>
    </footer>
  );
};

