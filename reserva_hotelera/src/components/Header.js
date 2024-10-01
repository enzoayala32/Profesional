import React, { useEffect, useState } from 'react';
import { AppBar, Avatar, Drawer, IconButton, InputBase, List, ListItem, makeStyles, Toolbar, Typography } from "@material-ui/core";
import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobile, setMobile] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyle();

  useEffect(() => {
    const responsiveness = () => window.innerWidth < 900 ? setMobile(true) : setMobile(false);
    responsiveness();
    window.addEventListener("resize", () => responsiveness());
  }, []);

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
      setDrawerOpen(false);
    };
    const headersData = ["My Account", "Previous Bookings", "Log Out"];
    
    const getDrawerChoices = () => {
      return headersData.map((data, index) => (
        <List key={index}>
          <ListItem>{data}</ListItem>
        </List>
      ));
    };

    return (
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="#ccc"
          aria-label="menu"
          aria-haspopup="true"
          onClick={handleDrawerOpen}
        >
          <MenuIcon fontSize='large' />
        </IconButton>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
        <Link to="/">
          <img src={logo} className={classes.logo} alt='logo' />
        </Link>
        <div className={classes.right}>
          <Typography>Sign in</Typography>
          <Avatar className={classes.avatar} />
        </div>
      </Toolbar>
    );
  };

  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
      <Link to="/">
        <img src={logo} className={classes.logo} alt='logo' />
      </Link>
      <div className={classes.center}>
        <InputBase fullWidth placeholder='Search here...' inputProps={{ className: classes.input }} />
        <SearchIcon />
      </div>
      <div className={classes.right}>
        <Typography>Sign in</Typography>
        <Avatar className={classes.avatar} />
      </div>
    </Toolbar>
  );

  return (
    <AppBar className={classes.root}>
      {mobile ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 99,
    width: "100vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    height: "45px",
    margin: theme.spacing(1, 0, 0, 2),
    objectFit: "contain",
  },
  center: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  input: {
    fontSize: "1.2rem",
    border: "1px solid lightgray",
    minWidth: "300px",
    borderRadius: "999px",
    padding: theme.spacing(1, 5, 1, 5),
    margin: theme.spacing(1, 5, 1, 5),
  },
  right: {
    color: "#333",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
  avatar: {
    marginLeft: theme.spacing(2),
  }
}));

export default Header;