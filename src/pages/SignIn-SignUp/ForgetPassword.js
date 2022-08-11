import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import forgetPasswordImg from "../../assets/images/forgetPasword.jpg";
import auth from "../../firebase.config";
import Loading from "../../shared/Loading";

const ForgetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  if (sending) {
    return <Loading loading={sending} />;
  }

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Check Your Mail Box !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <section className="h-[60vh] flex justify-center items-center">
      <div className="w-[300px] lg:w-[600px] flex justify-center items-center  bg-white p-4 rounded-md shadow-lg">
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img src={forgetPasswordImg} alt="forgetPasswordImg" />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="font-semibold text-xl lg:text-4xl text-secondary">
            Forget Password?
          </h2>
          <p className="text-base lg:text-lg">
            Enter the email address associate with your account
          </p>
          <form onSubmit={handleForgetPassword}>
            <input
              type="email"
              name="email"
              className=" border-b-2 focus:outline-0 py-2  w-full block text-base lg:text-lg text-black "
              placeholder="Enter email address"
              required
            />
            <button
              type="submit"
              className="bg-secondary rounded-md py-1 lg:py-2 block w-full mt-2 text-white font-semibold"
            >
              Send
            </button>
            {error && (
              <p className="text-center text-error mt-1">{error.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
