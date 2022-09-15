import React, { useEffect, useState } from "react";
import styles from "./NewsBox.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
const NewsBox = ({ info, thumbnail }) => {
  //https://placebeard.it/300x300

  const [title, setTitle] = useState("");
  const [articleThumbnail, setArticleThumbnail] = useState(
    "https://placebeard.it/300x300"
  );
  const [articleId, setArticleId] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (info) {
      setTitle(info.title);
      setArticleThumbnail(info.thumbnail);
      setArticleId(info._id);
    } else {
    }
  }, [info]);

  const handleClick = () => {
    //console.log(props);
    navigate(`/articles/${articleId}`);
  };
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${articleThumbnail})`,
        backgroundSize: "cover",
      }}
      onClick={handleClick}
    >
      <div className={styles.bottomTitle}>
        {/* {console.log("in news: ", title)} */}
        <h3 className={styles.titleText}>{title}</h3>
      </div>
    </div>
  );
};

export default NewsBox;
