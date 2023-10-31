import React, { useContext, useState } from "react";
import UserContext from "../ContextApi/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmited = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        name=""
        id=""
      />

      <input
        value={password}
        onChange={(e) => setPasword(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button onClick={handleSubmited}>Submit</button>
    </div>
  );
};

export default Login;
