import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { AppBar, Toolbar, Avatar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    height: 440,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const stateData = useSelector((state) => state);
  return (
    <Card
      className={classes.root}
      style={{
        borderRadius: "25px",
        background: `${stateData.color !== "" ? stateData.color : "#fff"}`,
      }}
    >
      <AppBar position="static" style={{ borderRadius: "25px 25px 0px 0px" }}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Live Card
          </Typography>
        </Toolbar>
      </AppBar>
      <CardContent>
        {stateData.image !== "" ? (
          <Avatar
            alt={stateData.cardName}
            src={stateData.image}
            style={{
              height: "200px",
              width: "200px",
              margin: "10px 90px 30px 90px",
            }}
          />
        ) : (
          <Avatar style={{ height: "100px", width: "100px" }}>
            <AccountCircleIcon />
          </Avatar>
        )}
        <Typography gutterBottom variant="h5" component="h1">
          Card Name: {stateData.cardName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" component="h3">
          Brand Name: {stateData.brandName}
        </Typography>
      </CardContent>
    </Card>
  );
}
