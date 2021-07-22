import React from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import {
  getBackgroundImage,
  nextBackground,
  prevBackground,
} from "./backgroundSlice";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";

const useStyles = makeStyles((theme) => ({
  arrow: {
    color: "rgba(255, 255, 255, 0.25)",
    position: "absolute",
    top: "50vh",
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
    zIndex: "3",
  },
  leftArrow: {
    fontSize: "40px",
    left: "70px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  rightArrow: {
    fontSize: "70px",
    right: "70px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "60px",
    },
  },
}));

export function BackgroundLeftControl() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
      <ArrowBackIosOutlinedIcon
        className={clsx(classes.leftArrow, classes.arrow)}
        aria-label="Previous Background Image"
        onClick={() => {
          dispatch(prevBackground());
        }}
      ></ArrowBackIosOutlinedIcon>
    </div>
  );
}

export function BackgroundRightControl() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
      <NavigateNextOutlinedIcon
        className={clsx(classes.rightArrow, classes.arrow)}
        aria-label="Next Background Image"
        onClick={() => {
          dispatch(getBackgroundImage()).then(() => {
            dispatch(nextBackground());
          });
        }}
      ></NavigateNextOutlinedIcon>
    </div>
  );
}
