import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from './style';

const Header = () => {
    const classes=useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>Front- End Assignment</Typography>
        <Typography variant="h6" className={classes.title}>Header Section</Typography>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
