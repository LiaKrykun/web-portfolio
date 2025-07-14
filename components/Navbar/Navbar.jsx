import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import logoLight from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";

function Navbar({ isDark }) {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleNavClick = (hash) => {
    navigate("/" + hash);
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={isDark ? logoDark : logoLight} alt="logo" />
      </Link>
      <ul className="nav-menu">
        <li>
          <Link className="anchor-link" to="/#about">
            About
          </Link>
        </li>
        <li>
          <Link className="anchor-link" to="/#projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="anchor-link" to="/#contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="bottom-navigation">
        <BottomNavigation
          className="bottom-navbar"
          showLabels
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: ".9rem",
              fontFamily: "Lora, sans-serif",
              color: "white",
            },
          }}
        >
          <BottomNavigationAction
            label="Home"
            onClick={() => navigate("/")}
            icon={<HomeIcon sx={{ fontSize: 28, color: "#ffffff" }} />}
          />
          <BottomNavigationAction
            label="About"
            onClick={() => handleNavClick("#about")}
            icon={<AccountCircleIcon sx={{ fontSize: 28, color: "#ffffff" }} />}
          />
          <BottomNavigationAction
            label="Projects"
            onClick={() => handleNavClick("#projects")}
            icon={
              <BusinessCenterRoundedIcon
                sx={{ fontSize: 28, color: "#ffffff" }}
              />
            }
          />
          <BottomNavigationAction
            label="Contact"
            onClick={() => handleNavClick("#contact")}
            icon={<TelegramIcon sx={{ fontSize: 28, color: "#ffffff" }} />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}

export default Navbar;
