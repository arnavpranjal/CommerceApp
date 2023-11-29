import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };
  return (
    <footer className="footer">
      <div>
        <p>@ 2023 Ecommerce...</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          atque animi quod tempore nisi cum sit. Beatae, eaque! Dolores officiis
          magnam totam ducimus ipsa necessitatibus culpa delectus sunt
          accusantium numquam.
        </p>
        <p>
          <YouTubeIcon className="socialicon" />
          <LinkedInIcon className="socialicon" />
          <InstagramIcon className="socialicon" />
        </p>
      </div>
      <div>
        <h2>Latest Posts</h2>
        <p className="customp">Sports a 2 billion dollar insdustry in India</p>
        <p className="customp" style={{ color: "orange" }}>
          21/04/2023
        </p>
        <p className="customp">Sports a 2 billion dollar insdustry in India</p>
        <p className="customp" style={{ color: "orange" }}>
          21/04/2023
        </p>
        <p className="customp">Sports a 2 billion dollar insdustry in India</p>
        <p className="customp" style={{ color: "orange" }}>
          21/04/2023
        </p>
      </div>
      <div>
        <h3>Links</h3>
        <p className="customp">
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault(); // Prevent default only if already on the home page
                window.scrollTo(0, 0); // Scroll to the top of the page
              }
            }}
          >
            Home
          </a>
        </p>

        <p className="customp" onClick={handleCartClick}>
          Cart
        </p>
        <p className="customp">Contact</p>
        <p className="customp">About</p>
      </div>
    </footer>
  );
};

export default Footer;
