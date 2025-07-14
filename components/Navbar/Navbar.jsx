import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import TelegramIcon from "@mui/icons-material/Telegram";

function Navbar() {
  const [value, setValue] = React.useState(0);
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#about">
            About
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#projects">
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact">
            Contact
          </AnchorLink>
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
            icon={<HomeIcon sx={{ fontSize: 28, color: "#ffffff" }} />}
          />
          <BottomNavigationAction
            label="About"
            icon={<AccountCircleIcon sx={{ fontSize: 28, color: "#ffffff" }} />}
          />
          <BottomNavigationAction
            label="Projects"
            icon={
              <BusinessCenterRoundedIcon
                sx={{ fontSize: 28, color: "#ffffff" }}
              />
            }
          />
          <BottomNavigationAction
            label="Contact"
            icon={<TelegramIcon sx={{ fontSize: 28, color: "#ffffff" }} />}
          />
        </BottomNavigation>
      </div>
    </div>
  );
}

export default Navbar;
