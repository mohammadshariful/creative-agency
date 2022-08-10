import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import singIn from "../../assets/images/signin.jpg";
import auth from "../../firebase.config";
import SocialLogin from "../../shared/SocialLogin";
const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(auth);
  const onSubmit = (data) => console.log(data);
  return (
    <section className=" w-[90%] mx-auto flex justify-center items-center my-5">
      <div className="flex">
        <img
          className="max-w-sm object-cover hidden lg:block"
          src={singIn}
          alt="signin"
        />
        <div className="bg-white rounded-md shadow-md w-[300px] md:w-96 lg:mx-4 p-4">
          <img className="w-28 mx-auto object-cover" src={logo} alt="logo" />
          <h2 className="text-center text-xl font-semibold text-secondary">
            SignIn
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt  text-error">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors?.password?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                )}
                {errors?.password?.type === "minLength" && (
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn btn-secondary  capitalize font-lg w-full max-w-xs text-white"
              type="submit"
              value="Sign In"
            />
          </form>
          <p className="text-right mt-2 text-secondary font-bold cursor-pointer">
            Forget your password?
          </p>
          <p>
            Are you new here?
            <Link to="/signup" className="text-neutral underline">
              signup here
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
