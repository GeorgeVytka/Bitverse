import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import articleFill from "../../utl/articleFull";
import styles from "./ArticlePage.module.css";

const ArticlePage = () => {
  const [title, setTitle] = useState("");
  const [acticleInfo, setArticleInfo] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const temP = {
      id: "6307d0463ff74c54bbcc2dfe",
    };
    const fetchData = async () => {
      try {
        const temp = await axios.put(
          `http://localhost:5005/api/v1/articleId/`,
          {
            id: id,
          }
        );
        setArticleInfo(temp.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const textArry = articleFill();
  return (
    <div>
      <Navbar />

      {Object.keys(acticleInfo).length !== 0 ? (
        <div className={styles.pageContainer}>
          <div>
            <h1>
              {acticleInfo.title !== null ? acticleInfo.title : "loading"}
            </h1>
            <h3>{acticleInfo.quote}</h3>

            <div className={styles.authorContianer}>
              <p>By {acticleInfo.author}</p>
              <p></p>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img src={acticleInfo.articleImgs[0]} className={styles.imgStyle} />
          </div>

          <div className={styles.body}>
            {acticleInfo.paragraphs.map((par, index) => (
              <p key={index}>{par}</p>
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default ArticlePage;
