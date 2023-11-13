import React from "react";
import Login from "./Compunent/Login";
import Profile from "./Compunent/Profile";
import Create from "./Crud/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Crud/Read";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Read />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </>
  );
};

export default App;
