import React from 'react'
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./page/Landing.js"
import ShowPage from "./page/ShowPage.js"

import Community from './page/CommunityPage.js';
import SignUpPage from './page/SignUpPage.js';
import SignInPage from './page/SignInPage.js'
import PostWrite from './page/PostWrite.js';


import TestStartPage from './component/TestStartPage.js';



import TestOptions from './component/TestOptions.js'
import TestResult from './component/TestResult.js';

import './App.css'

//test
import TestPage from "./page/TestPage.js"
import TestPage2 from "./page/TestPage2.js"


function App() {


  return (
    <HelmetProvider>
      <BrowserRouter>
          <Switch>
            <Route exact path = "/PLEA-STREET/" component={LandingPage}/>
            <Route exact path = "/PLEA-STREET/map" component={ShowPage}/>
            <Route exact path = "/PLEA-STREET/test" component={TestPage}/>
            <Route exact path = "/PLEA-STREET/test2" component={TestPage2}/>
            <Route exact path = "/PLEA-STREET/mapSearch" component={ShowPage}/>

            <Route exact path = "/PLEA-STREET/community" component={Community}/>
            <Route exact path = "/PLEA-STREET/signUp" component={SignUpPage}/>
            <Route exact path = "/PLEA-STREET/signIn" component={SignInPage}/>
            <Route exact path = "/PLEA-STREET/postwrite" component={PostWrite}/>


            <Route exact path = "/PLEA-STREET/cleanTest" component={TestStartPage}/>
            <Route exact path = "/PLEA-STREET/options" component={TestOptions}/>
            <Route exact path = "/PLEA-STREET/result/:score" component={TestResult}/>
            <Route exact path = "/PLEA-STREET/community" component={TestPage2}/>

            <Route exact path = "/PLEA-STREET/education" component={TestPage2}/>
          </Switch>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
