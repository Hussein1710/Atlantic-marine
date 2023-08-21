import React from "react";
import AtlanticLogo from "../../assets/AtlanticLogo.png";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white w-full absolute bottom-0 ">
      <div className="flex flex-col">
        <div className="footer-web-logo">
          <img
            src={AtlanticLogo}
            alt="footer web logo"
            className="mt-5 ml-10"
          />
        </div>
        <div className="px-8 mx-auto py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            {/* Content for the first section */}
            <h3>CONTACT(S)</h3>
            <ul className="whitespaces-pre">
              <li>+234(0)8034657847</li>
              <li>info@atlanticmarineoil.com</li>
              <li>Port-Harcourt Tel: +234(0)8188866115</li>
              <li>Takoradi Tel: +233242215798</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            {/* Content for the second section */}
            <h3>LAGOS OFFICE</h3>
            <p>
              YMCA House, 1st Floor, 77, Awolowo Road Ikoyi, Lagos, Nigeria
            </p>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            {/* Content for the fourth section */}
            <h3>PORT HARCOURT OFFICE</h3>
            <p>
              Atlantic Marine yard, 312 Port Harcourt/Aba Road.
            </p>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            {/* Content for the fifth section */}
            <h3>TAKORADI OFFICE</h3>
            <p>
              Navy Air-base, SOPC/GNPC Shore Base, Takoradi, Ghana
            </p>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3>SOCIALS</h3>
            <div className="flex justify-start items-center gap-2">
              <FaLinkedin />
              <FaFacebookF  />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
