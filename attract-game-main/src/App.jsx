import Home from "./pages/Home";
import SignUp from "./components/Auth/SingUp";
import Login from "./components/Auth/Login";
import EmailResend from "./components/Auth/EmailResend";
import ForgotPassword from "./components/Auth/ForgotPassword";
import NewPassword from "./components/Auth/NewPassword";
import PassordChangedSuccess from "./components/Auth/PassordChangedSuccess";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassowrd" element={<ForgotPassword />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/emailresend" element={<EmailResend />} />
        <Route path="/psswordchanged" element={<PassordChangedSuccess />} />
      </Routes>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <EmailResend /> */}
      {/* <ForgotPassword /> */}
      {/* <NewPassword /> */}
      {/* <PassordChangedSuccess /> */}
    </>
  );
}

export default App;
