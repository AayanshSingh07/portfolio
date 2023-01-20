import React from "react";
import "./home.css";

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="#home" className="home__social-link" target="_blank">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#home" className="home__social-link" target="_blank">
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#home" className="home__social-link" target="_blank">
                <i className="fa-brands fa-behance"></i>
            </a>
            <a href="#home" className="home__social-link" target="_blank">
                <i className="fa-brands fa-dribbble"></i>
            </a>
            <a href="#home" className="home__social-link" target="_blank">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="#home" className="home__social-link" target="_blank">
                <i className="fa-brands fa-pinterest"></i>
            </a>
        </div>
    )
}
export default HeaderSocials;
