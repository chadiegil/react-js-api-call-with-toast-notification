import React, { useState, useEffect } from "react";

import Card from "./card/Card";

import "./index.css";

const Home = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItems = () => {
    return fetch("http://localhost:3500/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        console.log(data);
        setLoading(true);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      {!loading && <h1 className="text-center loading">loading..</h1>}
      {post &&
        post.map((post) => {
          return <Card post={post} />;
        })}
    </>
  );
};

export default Home;
