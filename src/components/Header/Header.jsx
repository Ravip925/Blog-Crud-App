import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MenuBook } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./Header.css";

const Header = ({ token }) => {
  const user_token = token;
  const user = jwt_decode(user_token);
  const data = {
    name: user.fname,
    lname: user.lname,
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const toggleClass = toggle ? "active" : null;

  document.onclick = function (e) {
    if (e.target.id !== "sidebar" && e.target.id !== "toggle") {
      setToggle(false);
    }
  };

  const [mobView, setMobView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 550 ? setMobView(true) : setMobView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const navigate = useNavigate();
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      {mobView ? (
        <div className="nav">
          <div onClick={handleToggle} id="toggle" className={toggleClass}></div>
          <div id="sidebar" className={toggleClass}>
            <ul>
              <li>
                <Link className="a1" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="a1" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="a1" to="/addblog">
                  Add New Blog
                </Link>
              </li>
              <li className="logout" onClick={handleLogout}>
                Logout
              </li>
            </ul>
            <div className="name">
              <h3>{`Hi, ${data.name} ${data.lname}`}</h3>
            </div>
          </div>
        </div>
      ) : (
        <AppBar
          sx={{ backgroundColor: "#171717", color: "white", boxShadow: "none" }}
          position="sticky"
          color="primary"
        >
          <Toolbar>
            <Typography variant="h6">
              <NavLink to="/">
                <MenuBook />
              </NavLink>
            </Typography>
            <Typography variant="h6" sx={{ mt: "-5px", ml: "10px" }}>
              <NavLink to="/">Home</NavLink>
            </Typography>
            <Tabs
              sx={{ ml: "auto" }}
              textColor="inherit"
              indicatorColor="primary"
              value={value}
              onChange={handleChange}
            >
              <Tab
                LinkComponent={NavLink}
                to="/"
                disableRipple
                label={`${data.name} ${data.lname}`}
                sx={{ opacity: "1" }}
                value="one"
              />
              <Tab
                LinkComponent={NavLink}
                to="/blogs"
                disableRipple
                label="Blogs"
                sx={{ opacity: "1" }}
                value="two"
              />
              <Tab
                LinkComponent={NavLink}
                to="/addblog"
                disableRipple
                label="Add Blog"
                sx={{ opacity: "1" }}
                value="three"
              />
              <Tab
                disableRipple
                label="Logout"
                sx={{ opacity: "1" }}
                onClick={handleLogout}
                value="four"
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Header;
