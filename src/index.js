import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'

// <React.StrictMode>
//  </React.StrictMode>,
ReactDOM.render(
    
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
, 
  document.getElementById('root')
);

