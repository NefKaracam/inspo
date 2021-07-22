import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectImageUrls,
  getBackgroundImage,
  selectImageIndex,
} from "./backgroundSlice";
import {
  BackgroundLeftControl,
  BackgroundRightControl,
} from "./BackgroundControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bg: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "fixed",
    left: "0",
    right: "0",
    zIndex: "1",
    display: "block",
    width: "100%",
    height: "300px",
    minHeight: "100%",
    transform: "scale(1.5)",
    overflowY: "scroll",
  },
  bgContent: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
    left: "0",
    right: "0",
    zIndex: "2",
    paddingLeft: "20px",
    paddingright: "20px",
    overflowY: "scroll",
    backdropFilter: "brightness(60%) blur(5px)",
  },
});

export default function Background({ children }) {
  const classes = useStyles();
  const images = useSelector(selectImageUrls);
  const currentImageIndex = useSelector(selectImageIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBackgroundImage());
  }, [dispatch]);

  return (
    <>
      <div
        className={classes.bg}
        style={{ backgroundImage: ` url(${images[currentImageIndex]})` }}
      ></div>
      <div className={classes.bgContent}>{children}</div>
      <BackgroundLeftControl />
      <BackgroundRightControl />
    </>
  );
}
