import React, { useContext } from "react";
import { Data } from "./Providerdata";
const ConsumerData = () => {
  const Dataresive = useContext(Data);
  return (
    <div>
      <p>{Dataresive}</p>
    </div>
  );
};

export default ConsumerData;
