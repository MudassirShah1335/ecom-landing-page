import React from "react";
import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

const Login = () => {
  const navLinkstyle = ({ isActive }) => {
    fontweight: isActive ? "bold" : "normal";
  };

  return (
    <section className="flex gap-12 justify-center items-center h-screen ">
      <div className="flex flex-col gap-12">
        <img src={Logo} alt="" width="300px" />
        <div className=" font-semibold md:text-base lg:text-5xl  text-center text-[#092C60]">
          <p>Global</p>
          <p>Skill Seekers</p>
          <p>Awards</p>
        </div>
      </div>
      <div className="flex flex-col justify-center  w-fit p-12 ">
        <h1 className="text-5xl">WellCome </h1>
        <h1 className="text-5xl "> Back</h1>
        <div className="flex my-12 gap-12 justify-between items-center px-24 h-20 bg-[#f3f3f3] rounded-full text-black  w-full ">
          <NavLink to={"/Teacher"}>Teacher</NavLink>
          <NavLink to={"/Student"}>Student</NavLink>
          <NavLink to={"/SupperAdmin"}>Supper Admin</NavLink>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                className=" py-2 px-2 border-none border-b-2 border-black outline-none"
                type="email"
                placeholder="Mobile Number/Email "
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="text-red-600">
                {" "}
                {errors.email && touched.email && errors.email}
              </p>
              <input
                className=" py-2 px-2 border-none border-b-2 border-black outline-none"
                type="password"
                placeholder="Mobile Number/Email "
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}

              <button
                className="py-3 text-white bg-blue-600"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Login;
