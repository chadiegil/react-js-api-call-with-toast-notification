import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FcLike } from "react-icons/fc";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdShareAlt } from "react-icons/io";
import "./index.css";

const Home = () => {
  const [post, setPost] = useState(null);
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

  const alertSetting = () => {
    console.log("asdas");
    toast("settings");
  };
  const like = () => {
    toast.success("likes");
  };
  const share = () => {
    toast.info("share");
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      {!loading && <h1 className="text-center">loading..</h1>}
      {post &&
        post.map((post) => {
          return (
            <>
              <ToastContainer />
              <div className="m-4 container row row-cols-1 row-cols-md-2 g-4 d-flex align-items-center justify-content-center">
                <div className="col ">
                  <div className="card">
                    <div className="d-flex align-items-center justify-content-between m-2">
                      <img
                        src={post.profile}
                        alt={post.alt}
                        className="profile"
                      />
                      <h4 className="p-2">{post.name}</h4>
                      <div className="m-1 setting">
                        <CgMenuRightAlt onClick={alertSetting} />
                      </div>
                    </div>
                    <img
                      src={post.img}
                      className="card-img-top"
                      alt={post.alt}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.post}</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <FcLike className="button-1" onClick={like} />
                          <span className="m-2">
                            {new Intl.NumberFormat().format(
                              post.number_of_likes
                            )}
                          </span>
                        </div>
                        <div className="share-icon">
                          <IoMdShareAlt onClick={share} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Home;
