import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ArticleThumbnail.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
const ArticleThumbnail = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [articleThumbnail, setArticleThumbnail] = useState(
    "https://www.placecage.com/300/300"
  );

  let navigate = useNavigate();

  useEffect(() => {
    if (props) {
      setTitle(props.title);
      setAuthor(props.author);
      setArticleThumbnail(props.thumbnail);

      // console.log("bruhhhhh", props);
    } else {
      //
      // console.log("work my dude");
    }
  }, [props]);

  const handleClick = () => {
    //console.log(props);

    navigate(`/articles/${props.id}`);
  };

  return (
    <div onClick={handleClick} className={styles.articleContainer}>
      <img src={articleThumbnail} className={styles.imageStyle} />

      <div className={styles.textContainer}>
        <p className={styles.headline}>{title}</p>
        <p className={styles.date}>{"props.date"}</p>
        <p className={styles.author}>By: {author}</p>
      </div>
    </div>
  );
};

export default ArticleThumbnail;
