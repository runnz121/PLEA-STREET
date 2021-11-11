import React from 'react'
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./page/Landing.js"
import ShowPage from "./page/ShowPage.js"
import './App.css'

//test
import TestPage from "./page/TestPage.js"

function App() {


  return (
    <HelmetProvider>
      <BrowserRouter>
          <Switch>
            <Route exact path = "/PLEA-STREET/" component={LandingPage}/>
            <Route exact path = "/PLEA-STREET/map" component={ShowPage}/>
            <Route exact path = "/PLEA-STREET/test" component={TestPage}/>
          </Switch>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
