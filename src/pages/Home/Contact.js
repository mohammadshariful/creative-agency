import React from "react";
const Contact = () => {
  return (
    <section className="bg-secondary my-6 py-5">
      <div className="w-[90%] mx-auto my-5 flex flex-col lg:flex-row lg:space-x-4 space-y-4">
        <div className="w-full lg:w-1/2">
          <h3 className="text-xl lg:text-4xl font-semibold ">
            Let us handle your project, professionally.
          </h3>
          <p className="my-3 lg:text-lg">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <form className="grid grid-cols-1 gap-y-4">
            <input
              type="text"
              placeholder="Your name / Company's name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Your email address"
              className="input input-bordered w-full"
              required
            />
            <textarea
              className="textarea textarea-bordered w-full resize-none h-36"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              className="btn btn-md w-24 bg-[#24292F] text-white border-secondary hover:bg-[#24292F] hover:border-secondary"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
