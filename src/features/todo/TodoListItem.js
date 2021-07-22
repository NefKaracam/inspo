import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RedoRoundedIcon from "@material-ui/icons/RedoRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
import { IconButton, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoDone } from "./todoSlice";
import Confetti from "react-dom-confetti";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  listItem: {
    position: "relative",
    color: "#DFDFDF",
    backgroundColor: "#324759",
    "&:nth-child(2n)": {
      backgroundColor: "#565940",
    },
    "&:nth-child(3n)": {
      backgroundColor: "#728A8C",
    },
    "&:nth-child(4n)": {
      backgroundColor: "#728A8C",
    },
    padding: "24px",
    display: "flex",
    alignItems: "center",
    margin: "20px 0 20px 20px",
    borderRadius: "10px",
    fontSize: "20px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    width: "fit-content",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "8px 8px",
    },
  },
  button: {
    cursor: "pointer",
    position: "absolute",
    top: "-19px",
    borderRadius: "100%",
    border: "1px solid rgba(255, 255, 255, 0.45)",
    backdropFilter: "blur(6px)",
    fontSize: "10px",
    opacity: "0.75",
    "&:hover": {
      opacity: "1",
    },
  },
  removeButton: {
    right: "25px",
    "&:hover": {
      color: "white",
      border: "2px solid rgba(208, 2, 27, 0.25)",
      backgroundColor: "rgba(208, 2, 27, 0.25)",
    },
  },
  doneButton: {
    right: "-10px",
    "&:hover": {
      color: "white",
      border: "2px solid rgba(80, 227, 194, 0.25);",
      backgroundColor: "rgba(80, 227, 194, 0.25);",
    },
  },
}));

export default function TodoListItem({ text, id, isDone }) {
  const classes = useStyles();

  const [displayButtons, setDisplayButtons] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveClick = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  const handleToggleClick = (todoId) => {
    dispatch(toggleTodoDone(todoId));
  };

  const handleMouseHover = () => {
    setDisplayButtons(true);
  };

  const handleMouseLeave = () => {
    setDisplayButtons(false);
  };

  return (
    <Paper
      elevation={2}
      className={classes.listItem}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
      style={{ opacity: isDone ? "0.5" : "1" }}
    >
      <IconButton
        size="small"
        aria-label="Remove"
        className={clsx(classes.removeButton, classes.button)}
        onClick={() => handleRemoveClick(id)}
        style={{ display: displayButtons ? "block" : "none" }}
      >
        <CloseRoundedIcon />
      </IconButton>
      <IconButton
        size="small"
        aria-label="Done"
        className={clsx(classes.doneButton, classes.button)}
        onClick={() => handleToggleClick(id)}
        style={{ display: displayButtons ? "block" : "none" }}
      >
        {isDone ? <RedoRoundedIcon /> : <DoneRoundedIcon />}
      </IconButton>
      <Confetti
        active={isDone}
        config={({ spread: 360 }, { elementCount: 100 })}
      />
      {text}
    </Paper>
  );
}
