import React from "react";
import { styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Form from "../Form/Form";
import useStyles from "./style";
import LiveCard from "../LiveCard/LiveCard";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Content = () => {
  const classes = useStyles();
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container className={classes.container} spacing={5}>
        <Grid item xs={6}>
          <Item style={{ borderRadius: "25px" }}>
            <Form />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={{ borderRadius: "25px" }}>
            <LiveCard />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
