import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MenuBook } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Header = ({ token }) => {
  const user_token = token;
  const user = jwt_decode(user_token);
  const data = {
    name: user.fname,
    lname: user.lname,
  };

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
    </>
  );
};

export default Header;
