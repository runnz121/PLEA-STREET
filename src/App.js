import React from 'react'
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./page/Landing.js"
import ShowPage from "./page/ShowPage.js"
import Community from './page/CommunityPage.js';
import SignUpPage from './page/SignUpPage.js';
import SignInPage from './page/SignInPage.js'
import PostWrite from './page/PostWrite.js';
import PostedPage from './page/PostedPage.js'
import RecyclePage from './page/RecyclePage'
import TestStartPage from './component/TestStartPage.js';
import TestOptions from './component/TestOptions.js'
import TestResult from './component/TestResult.js';


import './App.css'


function App() {

  return (
    <HelmetProvider>
      <BrowserRouter forceRefresh={true}>
          <Switch>
            {/* 랜딩페이지 */}
            <Route exact path = "/PLEA-STREET/" component={LandingPage}/>
            {/* 지도검색 페이지 */}
            <Route exact path = "/PLEA-STREET/mapSearch" component={ShowPage}/>
            {/* 커뮤니티페이지 */}
            <Route exact path = "/PLEA-STREET/community" component={Community}/>
            <Route exact path = "/PLEA-STREET/signUp" component={SignUpPage}/>
            <Route exact path = "/PLEA-STREET/signIn" component={SignInPage}/>
            <Route exact path = "/PLEA-STREET/postwrite" component={PostWrite}/>
            <Route exact path = "/PLEA-STREET/posted" component={PostedPage}/>
            {/* 테스트페이지 */}
            <Route exact path = "/PLEA-STREET/cleanTest" component={TestStartPage}/>
            <Route exact path = "/PLEA-STREET/options" component={TestOptions}/>
            <Route exact path = "/PLEA-STREET/result/:score" component={TestResult}/>
            {/* 교육페이지 */}
            <Route exact path = "/PLEA-STREET/recycle" component={RecyclePage}/>

          </Switch>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
