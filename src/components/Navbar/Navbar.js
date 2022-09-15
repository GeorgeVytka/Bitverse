import React, { useState } from "react";
import styles from "./Navbar.module.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  let navigate = useNavigate();
  const linksArray = [
    { name: "News", url: "/news" },
    { name: "Gaming", url: "/gaming" },
    { name: "Reviews", url: "/reiviews" },
    { name: "Drama", url: "/drama" },
    { name: "Merch", url: "/merch" },
  ];

  const handleClick = (url) => {
    navigate(`/news`);
  };
  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.leftSide}>
        <div>
          <h2 className={styles.logo}>
            {" "}
            <a href={"/"}> Logo</a>
          </h2>
        </div>
        <div className={styles.links} id={showLinks ? styles.hidden : ""}>
          {linksArray.map((link, index) => (
            <a href={link.url} key={index}>
              {link.name}
            </a>
          ))}
        </div>
        <button
          onClick={() => setShowLinks(!showLinks)}
          style={{ backgroundColor: "#021E39" }}
        >
          <ReorderIcon style={{ color: "white" }} />
        </button>
      </div>

      <div className={styles.rightSide}>
        {" "}
        <div className={styles.logoContainer}>
          <FontAwesomeIcon
            icon={faInstagram}
            className={styles.fontAw}
            size="2x"
            color="white"
          />
          <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
