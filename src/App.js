import React from 'react'
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LandingPage from "./page/Landing.js"
import ShowPage from "./page/ShowPage.js"

function App() {
  return (
    <HelmetProvider>
      <Router>
          <Routes>
            <Route exact path = "/" element={<LandingPage/>}/>
            <Route exact path = "/map" element={<ShowPage/>}/>
          </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
