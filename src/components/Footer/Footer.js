import "./Footer.css";
import React from "react";
import Logo from "./Logo";
import logo from "../../images/logo.svg";
import Button from "./Button";
import Subscribe from "./Subscribe";
import copyright from "../../images/copyright.svg";
import Social from "./Social.js";

function Footer() {
  const buttons = [
    { text: "Find passion", href: "#" },
    { text: "Categories", href: "#categories" },
    { text: "Skills", href: "#skills" },
    { text: "Customer", href: "/customer" },
  ];
  const subscribe = {
    placeHolder: "Enter your email",
    button: "GO",
  };
  const social = [
    { className: "fa fa-facebook" },
    { className: "fa fa-behance" },
    { className: "fa fa-linkedin" },
    { className: "fa fa-instagram" },
    { className: "fa fa-dribbble" },
  ];

  return (
    <div className="footer-container">
      <div className="footer-top-container">
        <div className="footer-logo-container">
          <Logo src={logo} alt={"Company Logo"} />
        </div>
        <ul className="footer-menu-container">
          {buttons.map((data, i) => {
            return (
              <Button
                key={i}
                href={data.href}
                active={data.href === "/trial" ? true : ""}
              >
                {data.text}
              </Button>
            );
          })}
        </ul>
        <div className="footer-contact-container">
          <h4>Join our community</h4>
          <Subscribe
            placeHolder={subscribe.placeHolder}
            button={subscribe.button}
          />
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-copyright-container">
          <img src={copyright} alt=" All rights reserved" />
          <p>2021 Halo Lab. All rights reserved</p>
        </div>
        <div className="footer-social-container">
          {social.map((item, i) => {
            return <Social key={i} className={item.className} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
