import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Join from "./components/Join";


import Typography from '@material-ui/core/Typography'


import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {createTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';


let theme = createTheme({
  palette: {
    primary: {
      //main: '#29b6f6',
      light: '#55545b',
      main: '#2b2a33',
      dark: '#1e1d23',
      contrastText: '#fff',
    },
    secondary: {
      //main: '#ffd54f',
      contrastText: '#000',
      light: '#6EA1D8',
      main: '#3070B3',
      dark: '#1a3c61'
    },
  },
  typography: {
    fontFamily: [
      'Anonymous Pro',
      /*
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      */
    ].join(','),
    allVariants: {
      color: "white"
    },
  },
});

/*
const orangeTheme = createTheme({
  palette: {
    primary: {
      light: '#55545b',
      main: '#2b2a33',
      dark: '#1e1d23',
      contrastText: '#fff',
    },
    secondary: {
      light: '#55545b',
      main: '#2b2a33',
      dark: '#1e1d23',
      contrastText: '#fff',
    },
  }
})
*/
function App() {
  //theme = responsiveFontSizes(theme);
  return (
    <div className="App">
      <Router>
        <ScopedCssBaseline>
          <ThemeProvider theme={theme}>
          <div
            style={{
              backgroundColor: '#55545b',
              width: '100%',
              height: '100%'
            }}
          >
              <Navbar />
              <Switch>
                <Route path="/" exact component={() => <HomePage />} />
                <Route path="/projects" component={() => <HomePage />} />
                <Route path="/join" component={() => <Join />} />
                <Route path={["/education", "/work", "/about", "/files", "/contact"]}> <ErrorComing/> </Route>
                <Route path="*"> <Error404/> </Route>
              </Switch>
              <Footer/>
          </div>
          </ThemeProvider>
        </ScopedCssBaseline>
      </Router>
    </div>
  );
}

//errors
function Error404() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Typography variant="h2" gutterBottom align="center">
            <BuildIcon style={{ fontSize: 60 }}/> 
          </Typography>
          <Typography variant="h2" gutterBottom align="center">
            Error404
          </Typography>
          <Typography variant="h4" gutterBottom align="center">
            Page not found
          </Typography>
        </Grid>   
      </Grid> 
    </div>
  )
};
function ErrorComing() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Typography variant="h2" gutterBottom align="center">
            <BuildIcon style={{ fontSize: 60 }}/> 
          </Typography>
          <Typography variant="h2" gutterBottom align="center">
            Working on it
          </Typography>
          <Typography variant="h4" gutterBottom align="center">
            This page is still under construction
          </Typography>
        </Grid>   
      </Grid> 
    </div>
  )
};
export default App;

/*
<Box height="100vh">
<Box position="absolute" top="50%" left="40%">
  <Typography variant="h2" gutterBottom align="center">
    Error404
  </Typography>
  <Typography variant="h4" gutterBottom align="center">
    Page not found
  </Typography>
</Box>
</Box>
*/