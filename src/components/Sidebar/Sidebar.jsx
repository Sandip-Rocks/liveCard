import React from "react";
import { Grid } from "@material-ui/core";
const Sidebar = () => {
  return (
    <div>
      <Grid
        container
        spacing={3}
        style={{
          height: "92%",
          backgroundColor: "#DCDCDC",
          width: "25%",
          position: "absolute",
          top: "76px",
          left: "0px",
          boxShadow: "#333 0px 1px 7px",
        }}
      ></Grid>
    </div>
  );
};

export default Sidebar;
