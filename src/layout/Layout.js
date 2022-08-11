import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import ForgetPassword from "../pages/SignIn-SignUp/ForgetPassword";
import SignIn from "../pages/SignIn-SignUp/SignIn";
import Signup from "../pages/SignIn-SignUp/Signup";
import RequireAuth from "../shared/RequireAuth";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/contact"
        element={
          <RequireAuth>
            <Contact />
          </RequireAuth>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin/forgetpassword" element={<ForgetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Layout;
