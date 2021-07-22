import React from "react";
import { SnackbarProvider } from "notistack";
import { Box } from "@material-ui/core";

import styles from "./App.module.css";
import Background from "./features/background/Background";
import TodoInput from "./features/todo/TodoInput";
import TodoList from "./features/todo/TodoList";
import Weather from "./features/weather/Weather";
import Quote from "./features/quote/Quote";
import Footer from "./features/Footer";

function App() {
  return (
    <div className={styles.App}>
      <SnackbarProvider maxSnack={3}>
        <Background>
          <Box position="relative" paddingBottom="30px">
            <Weather />
            <TodoInput />
            <TodoList />
            <Quote />
          </Box>
          <Footer />
        </Background>
      </SnackbarProvider>
    </div>
  );
}

export default App;
