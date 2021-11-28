import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { BlockPicker } from "react-color";
import Tippy from "@tippyjs/react";
import useStyles from "./style";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeBrandName,
  changeCardName,
  changeColorName,
  changeImage,
} from "../../redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state);
  const [selectedColor, setSelectedColor] = useState("#ccc");
  const [imgErr, setImgErr] = useState("");
  const [open, setOpen] = React.useState(false);
  const [bName, setBName] = useState("");
  const [cName, setCName] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => {
    handleOpen();
    setBName(data.brand_name);
    setCName(data.card_name);
  };
  return (
    <div>
      <form
        className="flex flex-col justify-center w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <AppBar position="static" style={{ borderRadius: "25px 25px 0px 0px" }}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5" className={classes.title}>
              Input
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="App">
          <TextField
            required
            name="card_name"
            {...register("card_name", {
              required: "Please enter Card Name.",
              pattern: {
                value: /^([a-zA-Z0-9\s]{1,10})$/,
                message: "Invalid Card Name",
              },
            })}
            className="TextField"
            style={{ marginTop: "40px" }}
            label="Card Name"
            color="primary"
            variant="outlined"
            onChange={(e) => {
              dispatch(changeCardName(e.target.value));
            }}
            value={stateData.cardName}
            helperText={errors?.card_name?.message}
            error={!!errors && errors.card_name}
          />
          <br />
          <TextField
            required
            name="brand_name"
            {...register("brand_name", {
              required: "Please enter Brand Name.",
              pattern: {
                value: /^([a-zA-Z0-9\s]{1,10})$/,
                message: "Invalid Brand Name",
              },
            })}
            className="TextField"
            style={{ marginTop: "40px" }}
            label="Brand Name"
            onChange={(e) => dispatch(changeBrandName(e.target.value))}
            value={stateData.brandName}
            color="primary"
            variant="outlined"
            helperText={errors?.brand_name?.message}
            error={!!errors.brand_name}
          />

          <br />
          <br />
          <div>
            <div
              className="area"
              style={{ backgroundColor: selectedColor }}
            ></div>

            <Tippy
              interactive={true}
              placement={"bottom"}
              content={
                <BlockPicker
                  color={selectedColor}
                  value={stateData.color}
                  onChangeComplete={(color) => {
                    dispatch(changeColorName(color.hex));
                    setSelectedColor(color.hex);
                  }}
                />
              }
            >
              <Button
                color="primary"
                variant="contained"
                style={{
                  borderRadius: "15px",
                  width: "160px",
                  paddingTop: "5px",
                  boxShadow: "#333 0px 1px 10px",
                }}
              >
                Choose Color
              </Button>
            </Tippy>
          </div>
          <br />
          <div>
            <input
              type="file"
              name="picture"
              value={stateData.photo}
              onChange={(e) => {
                try {
                  if (
                    e.target.files[0].type === "image/png" || //Image Validation
                    e.target.files[0].type === "image/jpeg"
                  ) {
                    const reader = new FileReader(); // file reader to read a file from the device
                    reader.addEventListener("load", () => {
                      dispatch(changeImage(reader.result));
                    });
                    reader.readAsDataURL(e.target.files[0]);
                    setImgErr("");
                  } else {
                    throw Error("Kindly upload Jpeg or png"); //Explicitly throw error if the file is not jpeg or png
                  }
                } catch (err) {
                  setImgErr("Kindly upload Jpeg or png");
                }
              }}
            />
          </div>
          {imgErr !== "" ? (
            <p
              style={{
                color: "#f44336",
                marginTop: "4px",
                fontSize: "13px",
              }}
            >
              {imgErr}
            </p>
          ) : (
            ""
          )}
          <br />
          <DialogActions></DialogActions>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            onClick={handleSubmit(onSubmit)}
            style={{
              borderRadius: "15px",
              width: "150px",
              paddingTop: "5px",
              boxShadow: "#333 0px 1px 10px",
            }}
          >
            Submit
          </Button>
          <DialogActions></DialogActions>
        </div>
      </form>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Card Name: {`${cName}`}
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Brand Name: {`${bName}`}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
