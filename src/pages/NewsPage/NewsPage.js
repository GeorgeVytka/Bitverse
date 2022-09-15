import react, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ArticleThumbnail from "../../components/ArticleThumbnail/ArticleThumbnail";
import axios from "axios";
import styles from "./NewsPage.module.css";
const NewsPage = () => {
  const [articleList, setArticleList] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const articles = await axios.get("http://localhost:5005/api/v1/articles");

      setArticleList(articles.data);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.newsContainer}>
        {console.log(articleList)}

        <div>
          {articleList.length > 0 ? (
            articleList.map((info, index) => (
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

export default NewsPage;
