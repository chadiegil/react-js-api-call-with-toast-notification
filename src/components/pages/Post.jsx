import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import "./post.css";
import Profile from "../profile/Profile";

const Post = () => {
  const { userId } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3500/posts/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
        console.log(post);
      });
  }, [userId]);

  return (
    <div className="card margin-left">
      {isLoading && <h1>Loading ...</h1>}

      <div classNameName="container d-flex align-items-center justify-content-between">
        <Profile post={post} />

        <div className="h6">{post.post}</div>
        <img src={post.img} alt="image" width={350} />
      </div>
      <div>
        <Link to="/">
          <IoMdArrowBack className="back" />
        </Link>
      </div>
    </div>
  );
};

export default Post;
