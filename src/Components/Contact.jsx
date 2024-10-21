import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { HiPhone } from "react-icons/hi2";
import { SlSocialLinkedin } from "react-icons/sl";
import { GrGithub } from "react-icons/gr";




function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>

        <div className="contact-icon">
          <a href="callto:8434606313" target="blank" className="items">
            <HiPhone className="icons " />
          </a>

          <a
            href="mailto:eramitsingh006@gmail.com"
            target="blank"
            className="items"
          >
            <BiLogoGmail className="icons " />
          </a>

          <a
            href=" https://www.linkedin.com/in/amit-kumar006"
            target="blank"
            className="items"
          >
            <SlSocialLinkedin className="icons " />
          </a>

          <a
            href="https://github.com/amit8434 "
            target="blank"
            className="items"
          >
            <GrGithub className="icons " />
          </a>

          <a
            href="https://www.instagram.com/amit_8434_"
            target="blank"
            className="items"
          >
            <FaSquareInstagram className="icons " />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
