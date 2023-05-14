import React, { useState } from "react";
import { Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import Services from "./Services";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Follow from "./Follow"
import Footer from "./Footer";
import Popup from "./Popup"

function Home(){
    const [popup,setPopup] = useState(false);
    return(
        <>
        <div className="main">
        <Popup popup={popup} setPopup={setPopup} />
        <Header />
        <Jumbotron popup={popup} setPopup={setPopup} />
        <Services />
        <Contact popup={popup} setPopup={setPopup} />
        <Testimonials />
        <Follow />
        <Footer />
        </div>
        </>
    )
}

export default Home;