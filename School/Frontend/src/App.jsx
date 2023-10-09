import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Teacher from "./pages/Teacher";
import Student from "./pages/Sdudent";
import SupperAdmin from "./pages/SupperAdmin";
import School from "./pages/School";
import AboutSchool from "./pages/AboutSchool";
import Erarr from "./pages/Erarr";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/SupperAdmin" element={<SupperAdmin />} />
          <Route path="/School" element={<School />} />
          <Route path="/AboutSchool" element={<AboutSchool />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {/* <h1>check </h1> */}
    </div>
  );
};

export default App;
