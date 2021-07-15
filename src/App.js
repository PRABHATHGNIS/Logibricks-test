import {Box} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import BackgroundSwitch from './components/BackgroundSwitch';
import CustomControls from './components/CustomControls';
import CustomSwitch from './components/CustomSwitch';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5E4FDB"
    },
    secondary: {
      main: "#1ABC9C"
    },
    primaryDark: {
      main: "yellow"
    }
  },
  typography: {
    body1: {
      fontFamily: "Comic Sans"
    }
  },
  custom: {
    myOwnComponent: {
      margin: "10px 10px",
      backgroundColor: "lightgreen"
    }
  }
});
function App(props) {
 
  return (
    <MuiThemeProvider theme={theme}>
 <Box style={{ backgroundColor: props.theme.backgroundColor,height:'100vh' }}>
      <CustomControls />
      <BackgroundSwitch />
      <CustomSwitch />
     
    </Box>
    </MuiThemeProvider>
  );
}


const mapStateToProps = (state) => {
  return {
    theme: state.appThemeReducer
  }
}
export default connect(mapStateToProps)(App);
