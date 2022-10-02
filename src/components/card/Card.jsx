import React from "react";
import { FcLike } from "react-icons/fc";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdShareAlt } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./card.css";
import { useNavigate } from "react-router-dom";

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

const Card = ({ post }) => {
  const navigate = useNavigate();

  const openPost = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
      <ToastContainer />
      <div className="container row row-cols-1 row-cols-md-1 g-6 d-flex align-items-center justify-content-center box-shadow ">
        <div className="col d-flex align-items-center justify-content-center">
          <div className="card">
            <div className="d-flex align-items-center justify-content-between m-2">
              <img src={post.profile} alt={post.alt} className="profile" />
              <h4 className="p-2">{post.name}</h4>
              <div className="m-1 setting">
                <CgMenuRightAlt onClick={alertSetting} />
              </div>
            </div>
            <img
              src={post.img}
              className="card-img-top img"
              alt={post.alt}
              onClick={openPost}
            />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.post}</p>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <FcLike className="button-1" onClick={like} />
                  <span className="m-2">
                    {new Intl.NumberFormat().format(post.number_of_likes)}
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
    </div>
  );
};

export default Card;
