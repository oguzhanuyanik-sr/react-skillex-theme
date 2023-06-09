import React from "react";
import logo from "../../images/logo.svg";
import "./Navbar.css";
import Logo from "./Logo";
import Button from "./Button";

function Navbar() {
  const logoAlt = "Company Name";
  const buttons = {
    menu: [
      { text: "Find passion", href: "#" },
      { text: "Categories", href: "#categories" },
      { text: "Skills", href: "#skills" },
      { text: "Customer", href: "/customer" },
    ],
    register: [
      { text: "Login", href: "/login" },
      { text: "Free Trial", href: "/trial" },
    ],
  };

  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  return (
    <div className={`nav-container${scrollY > 60 ? " sticky-navbar" : ""}`}>
      <Logo src={logo} alt={logoAlt} />
      <ul className="nav-menu">
        {buttons.menu.map((data, i) => {
          return (
            <Button key={i} href={data.href}>
              {data.text}
            </Button>
          );
        })}
      </ul>
      <div className="nav-right-container">
        {buttons.register.map((data, i) => {
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
      </div>
      <div className="menu-bar-container">
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
