import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TodoListItem from "./TodoListItem";
import { selectTodos } from "../todo/todoSlice";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  listContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    borderRadius: "10px",
    width: "65%",
    margin: " 0 auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

export default function TodoList() {
  const classes = useStyles();

  const todos = useSelector(selectTodos);
  return (
    <Paper elevation={6} className={classes.listContainer}>
      <Grid container>
        {todos?.map((todo) => {
          return <TodoListItem {...todo} key={todo.id} />;
        })}
      </Grid>
    </Paper>
  );
}
