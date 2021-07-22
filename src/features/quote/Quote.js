import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getRandomQuote, selectQuote } from "./quoteSlice";
import { useSnackbar } from "notistack";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  quoteContainer: {
    fontFamily: "Georgia, serif",
    lineHeight: "1.5em",
    letterSpacing: "1px",
    fontSize: "1.2em",
    textAlign: "center",
    fontWeight: "lighter",
    color: "#DFDFDF",
    textShadow: "2px 2px 4px rgba(0,0,0,0.89)",
    padding: "90px 40px 0 40px",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "40px",
    },
  },
  quoteAuthor: {
    opacity: "0.6",
    paddingTop: "10px",
  },

  quoteText: {
    fontStyle: "italic",
  },
}));

export default function Quote() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const { quote, hasError, isLoading, author } = useSelector(selectQuote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomQuote());
  }, [dispatch]);

  useEffect(() => {
    if (hasError) {
      enqueueSnackbar("Error fetching the quote from the API", {
        variant: "error",
      });
    }
  }, [enqueueSnackbar, hasError]);

  if (hasError) return null;

  return (
    <div className={classes.quoteContainer}>
      {isLoading ? (
        <CircularProgress style={{ color: "rgba(255, 255, 255, 1.00)" }} />
      ) : (
        <>
          <p className={classes.quoteText}>"{quote}"</p>
          <p className={classes.quoteAuthor}>
            - {author} <br></br> <br></br>
          </p>
        </>
      )}
    </div>
  );
}
