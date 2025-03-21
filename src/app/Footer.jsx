import React from "react";
import Image from "next/image"
import logo from "./asserts/Logo.png"
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";

import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer
      className="footer text-white py-5"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <Image src={logo} alt="Logo" className="img-fluid mb-3" />
            <p>
            Welcome to Syntax Arts, your premier destination for exceptional website design and development services. We specialize in creating visually stunning, highly functional, and user-friendly websites that elevate your online presence and drive business growth.
            </p>
            <div>
              <MdOutlineFacebook
                className="m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#3b5998", padding: "8px" }}
              />
              <FaInstagram
                className=" m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#DD2A7B", padding: "8px" }}
              />
              <FaYoutube
                className=" m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#FF0000", padding: "8px" }}
              />
              <FaLinkedin
                className=" m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#0072b1", padding: "8px" }}
              />
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li >
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight />
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Ui/Ux
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Digital Marketing
                </Link>
              </li>
             
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Pages</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> About Us
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Service
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Project
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Contact US
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Contact Us</h5>
            <p>
              <IoLocationOutline />
              &nbsp; Flat No.104, Sri Balaji Apartments, Nimboliadda,
              Himayathnagar, Himayathnagar, Telangana, India, 500027
            </p>
            <p>
              <IoChatbubbleEllipsesOutline />
              &nbsp; Chat with an Expert
            </p>
            <p>
              <IoCall /> +91 9959456647
            </p>
            <p>
              <IoMdMail /> Shaikmuzeef9999@gmail.com
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 text-center text-white d-flex justify-content-between align-items-center">
            <p>&copy; 2024 All rights reserved.</p>
            <p>Design and Developed by SyntaxArts</p>
          </div>
        </div>
      </div>
    </footer>
  );
};