import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Themes, CustomizedCheckbox, sharedStyles, createGlobalStyles, makeStyles, withStyles, Main } from "@apraamcos/ui-library-mui5";
import { CacheProvider } from "@emotion/react";
import {  muiCache } from './mui';
// import Aaa from './Aaa';

// const useStyles = makeStyles()(({ breakpoints }) => ({
//   label: {
//     color: "black"
//   }
// }));

function App() {
  // const {theme, classes} = useStyles();
  return (
    <Main>
      <Typography variant="h1" color="primary"  >1231231</Typography>
      </Main>

  );
}

export default App;
