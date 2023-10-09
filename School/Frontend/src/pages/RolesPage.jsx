import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../config/baseUrl";

const RolesPage = () => {
  const [data, setData] = useState([]);

  const getRoles = async () => {
    const result = await axios.get(`${baseUrl}api/role`);
    setData(result.data.data);
  };
  useEffect(() => {
    getRoles();
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((it) => {
        return (
          <div>
            <p>{it.role_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RolesPage;
