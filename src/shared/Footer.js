import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";
import facebook from "../assets/social-icons/facebook.png";
import instagram from "../assets/social-icons/instagram.png";
import linkedin from "../assets/social-icons/linkedin.png";
import pinterest from "../assets/social-icons/pinterest.png";
import twitter from "../assets/social-icons/twitter.png";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#03203C",
      }}
      className=" text-white "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:justify-items-center gap-10 bg-black px-16 py-4">
        <div className="flex items-center gap-3">
          <AiOutlinePhone className="bg-neutral  rounded-full    text-3xl lg:text-4xl p-2" />
          <div>
            <h5 className="text-lg">Call Us</h5>
            <p>+8801735841876</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FiMail className="bg-neutral  rounded-full text-4xl lg:text-4xl p-2" />
          <div>
            <h5 className="text-lg">Mail Us</h5>
            <p>info@creativeagency.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <RiShareForwardLine className="bg-neutral  rounded-full text-3xl lg:text-4xl p-2" />
          <div>
            <h5 className="text-lg">Follow Us</h5>
            <ul className="flex items-center gap-2">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
              <li>
                <img src={linkedin} alt="" />
              </li>
              <li>
                <img src={pinterest} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="w-[90%] mx-auto py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:justify-items-center">
          <div>
            <h3 className="font-semibold text-xl">About Us</h3>
            <p>
              earnest team committed to delivering the best industry.We are more
              than happy to deliver you the best! Reach out to partner with us.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Product & Services</h3>
            <ul>
              <li>Web Development</li>
              <li>Web Design</li>
              <li>Android App Development</li>
              <li>Digital Marketing</li>
              <li>Social Management Software</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Quick Links</h3>
            <ul>
              <li>Portfolio</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Contacts</h3>
            <p>
              <span className="font-bold">Address : </span> #24,MK SQURE 2nd
              Floor,Sri Vari Ramakrishna Garden,Sivanandapuram,Coimbatore
              -06,Tamilnadu.
            </p>
            <ul>
              <li>
                <span className="font-bold">Email : </span>
                info@creativeagency.com
              </li>
              <li>
                <span className="font-bold">Phone : </span>
                +8801735841876
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="px-16 flex justify-between items-center flex-col-reverse md:flex-row font-light bg-black py-2">
        <p className="text-center">
          copyright &copy; {new Date().getFullYear()} Creative Agency.All rights
          reserved.
        </p>
        <ul className="flex justify-between items-center flex-col md:flex-row">
          <li>Terms and Conditions |</li>
          <li>Privacy Policy |</li>
          <li>Cancelation Policy |</li>
          <li>Refund Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
