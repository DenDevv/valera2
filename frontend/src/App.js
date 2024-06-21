
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Challenge from "./pages/Challenge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bot from "./pages/Bot";
import "./1200-1440.css"

function App() {
    //сначала сзади серое доделать




  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" index element={<MainPage/>}/>
            <Route path="/challenge" element={<Challenge/>}/>
            <Route path="/bot" element={<Bot/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
