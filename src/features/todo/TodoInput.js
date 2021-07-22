import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { addTodo } from "../todo/todoSlice";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputText: {
    color: "#DFDFDF",
    padding: "30px 0 0 30px",
    fontSize: "calc(1em + 1vw)",
    fontWeight: "700",
    letterSpacing: "-1px",
    lineHeight: "46px",
    textShadow: "2px 2px 4px rgba(0,0,0,0.59)",
    [theme.breakpoints.down("sm")]: {},
  },
  inputContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    marginBottom: "40px",
    borderRadius: "10px",
    width: "65%",
    margin: "0 auto",
  },
}));

const WhiteTextField = withStyles({
  root: {
    padding: "30px",

    "& .MuiInputBase-input": {
      color: "#DFDFDF",
      textShadow: "1px 1px 4px rgba(0,0,0,0.89)",
      fontSize: "2.25em",
      lineHeight: "1.2",
      fontWeight: "500",
      outline: "none",
      textAlign: "center",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#DFDFDF",
      // Semi-transparent underline
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#fff", // Solid underline on hover
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff", // Solid underline on focus
    },
  },
})(TextField);

export default function TodoInput() {
  const classes = useStyles();
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const handleFormSumbit = (event) => {
    event.preventDefault();
    if (newTodo === "") {
      return;
    }
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };
  return (
    <>
      <Paper elevation={6} className={classes.inputContainer}>
        <Typography className={classes.inputText}>
          What's on your mind today?
        </Typography>

        <form onSubmit={handleFormSumbit}>
          <WhiteTextField
            value={newTodo}
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            aria-label="New Todo"
            fullWidth
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
        </form>
      </Paper>
    </>
  );
}
