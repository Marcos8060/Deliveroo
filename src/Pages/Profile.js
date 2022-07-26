import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const history = useNavigate();
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return history("/login");
  }
  return (
    <div className="container">
      <header className="">
        <h3>
          <strong>{currentUser?.username}</strong>Profile
        </h3>
      </header>

      <p>
        <strong>Token:</strong> {currentUser?.accessToken.substring(0, 20)} ...{" "}
        {currentUser?.accessToken.substr(currentUser?.accessToken.length - 20)}
      </p>

      <p>
        <strong>Id:</strong> {currentUser?.id}
      </p>

      <p>
        <strong>Email:</strong> {currentUser?.email}
      </p>
    </div>
  );
};

export default Profile;
