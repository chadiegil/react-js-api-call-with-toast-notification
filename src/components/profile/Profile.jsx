import React from "react";

const Profile = ({ post }) => {
  return (
    <div classNameName="d-flex align-items-center">
      <img className="profile" src={post.profile} alt="profile" width={150} />
      <span className="h3 mt-4 p-1">{post.name}</span>
    </div>
  );
};

export default Profile;
