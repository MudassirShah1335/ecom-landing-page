import React, { useContext } from "react";
import UserContext from "../ContextApi/UserContext";
const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>pleaze login</div>;
  return <div>Wellcome {user.username}</div>;
};

export default Profile;
