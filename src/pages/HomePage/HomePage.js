import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import NewsBox from "../../components/NewsBox/NewsBox";
import Button from "../../components/Button/Button";
import ArticleThumbnail from "../../components/ArticleThumbnail/ArticleThumbnail";
import styles from "./HomePage.module.css";

const HomePage = () => {
  let articleS = {};
  const [articleInfo, setArticleInfo] = useState("");
  const [articleInfo2, setArticleInfo2] = useState("");
  const [selectedType, setSelectedType] = useState("ALL");
  const [articleList, setArticleList] = useState({});
  let headline = [];
  let article = [];
  const articles = [
    {
      title: "Marvel's Spider-Man PC: First Wave of ReSkin Mods Are Amazing",
      date: "30mins",
      author: "DudeBro",
      image: "https://placebeard.it/300x300",
    },
    {
      title: "Deal Alert: Score a Pair of $200 Razer Anzu",
      date: "50mins",
      author: "DudeBro",
      image: "https://www.placecage.com/300/300",
    },
    ,
    {
      title: "Deal Alert: Score a Pair of $200 Razer Anzu",
      date: "50mins",
      author: "DudeBro",
      image: "https://www.placecage.com/300/300",
    },
  ];

  useEffect(() => {
    // articleS = await axios.get("http://localhost:5005/api/v1/articles");
    // console.log(articleS.data[0].title);
    const fetchData = async () => {
      articleS = await axios.get("http://localhost:5005/api/v1/articles");

      article = [];
      headline = articleS.data.filter((element) => {
        if (element.isHeadLine) {
          return element;
        } else {
          article.push(element);
          console.log("this is article -=", article);
        }
      });

      setArticleInfo(headline);
      setArticleInfo2(["bru", "bri"]);
      setArticleInfo2(article);

      //console.log("this is article++++", articleInfo2);
    };

    fetchData();
  }, []);

  const switchType = (type) => {
    setSelectedType(type);
    //.log(selectedType);
  };

  return (
    <div className={styles.titleContainer}>
      <Navbar />
      <div>
        <h1>Top News</h1>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.headlineContainer}>
          <NewsBox
            thumbnail={"https://www.placecage.com/300/300"}
            info={articleInfo[0]}
          />
          <NewsBox
            thumbnail={"https://www.stevensegallery.com/400/400"}
            info={articleInfo[1]}
          />
          <NewsBox
            thumbnail={"https://www.fillmurray.com/300/300"}
            info={articleInfo[2]}
          />
          <NewsBox
            thumbnail={"https://www.placecage.com/300/300"}
            info={articleInfo[3]}
          />
        </div>
      </div>

      <div className={styles.lineBreak}></div>

      <div className={styles.tempStyle}>
        <div className={styles.gridContainer}>
          <Button switchType={switchType} name={"PS5"} />
          <Button switchType={switchType} name={"XBOXS"} />
          <Button switchType={switchType} name={"SWITCH"} />
          <Button switchType={switchType} name={"PC"} />
        </div>
      </div>

      <div className={styles.articleContainer}>
        <div>
          {console.log("this is article++++", articleInfo2.length)}
          {articleInfo2.length > 0 ? (
            articleInfo2.map((info, index) => (
              <ArticleThumbnail
                title={info.title}
                date={"article.date"}
                author={info.author}
                articleImg={"article.image"}
                id={info._id}
                thumbnail={info.thumbnail}
                articleImgs={info.articleImgs}
                key={index}
              />
            ))
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
