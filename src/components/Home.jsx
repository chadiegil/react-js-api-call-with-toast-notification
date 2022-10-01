import React, { useState, useEffect } from "react";
import Card from "./card/Card";
import { CgSearch } from "react-icons/cg";

import "./index.css";

const Home = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const [inputSearch, setInputSearch] = useState("");

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

      <div className="container d-flex align-items-center justify-content-center">
        <input
          type="text"
          name="search"
          placeholder="search name..."
          className="search"
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </div>
      {post &&
        post
          .filter((value) => {
            if (inputSearch == "") return value;
            if (
              value.name.toLowerCase().includes(inputSearch.toLocaleLowerCase())
            ) {
              return value;
            }
          })
          .map((post) => {
            return <Card post={post} />;
          })}
    </>
  );
};

export default Home;
