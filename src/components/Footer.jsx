import React from "react";
import Header from "./Header";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
    return (
        <footer className="footer pad wrp-flex gp-30 fade-in">
          <h2 className="txt-ct">Follow me</h2>
            <div className="links all-flex gp-20">
                <a href="https://github.com/Crystes/Crystes" target="_blank">
                    <img src="./icons/github.png" alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/akinmoyero-bamidele-06388123a/" target="_blank">
                    <img src="./icons/linkedin.png" alt="LinedIn" />
                </a>
                <a href="https://www.instagram.com/_cryste/" target="_blank">
                    <img src="./icons/instagram.png" alt="Instagram" />
                </a>
                <a href="https://web.facebook.com/profile.php?id=100086294644534" target="_blank">
                    <img src="./icons/facebook.png" alt="Facebook" />
                </a>
            </div>
            <p className="txt-ct">copyright &copy; {year}</p>
        </footer>
    );
};

export default Footer;
