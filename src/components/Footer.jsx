import React from "react";
import logo from "../assets/skillswap-white.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-6 md:p-10">
      <aside className="space-y-3">
        <img className="w-40 md:max-w-44" src={logo} alt="SkillSwap Logo" />
        <p className="text-base">
          SkillSwap
          <br />
          Learn Skills. Build Careers.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-blue-500"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-blue-400"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-blue-700"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-pink-500"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </aside>

      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Graphic Design</a>
        <a className="link link-hover">Web Development</a>
        <a className="link link-hover">Digital Marketing</a>
        <a className="link link-hover">UI/UX Design</a>
        <a className="link link-hover">SEO Optimization</a>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About SkillSwap</a>
        <a className="link link-hover">How It Works</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Success Stories</a>
        <a className="link link-hover">Blog</a>
      </nav>

      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">FAQs</a>
        <a className="link link-hover">Community</a>
      </nav>

      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover">Email: support@skillswap.com</a>
        <a className="link link-hover">Phone: +880 1234-567890</a>
        <a className="link link-hover">Address: Sylhet, Bangladesh</a>
      </nav>
    </footer>
  );
};

export default Footer;
