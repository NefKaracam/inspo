import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "right",
    color: "white",
    opacity: "0.75",
    paddingRight: "60px",
    paddingBottom: "35px",
    position: "absolute",
    bottom: "0",
    right: "0",
    left: "0",
    width: "100%",
    fontSize: "14px",
    paddingTop: "45px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  span: {
    color: "rgba(139, 0, 0, 1.00)",
  },
  a: {
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p className={classes.p}>
        &copy; 2021 | Built with <span className={classes.span}>&#10084;</span>{" "}
        by{" "}
        <a className={classes.a} href={"https://github.com/NefKaracam"}>
          <strong>Nef</strong>
        </a>
      </p>
    </footer>
  );
}
