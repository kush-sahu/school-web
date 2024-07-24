
import React from "react";
import { BrowserRouter as Router, Route,Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav";
import About from "./components/about_us";
import Accademic from "./components/academics";
import Admissions from "./components/admissions";
import Contact from "./components/contact";
import Faculty from "./components/faculty";
import Gallery from "./components/gallery";
import Students from "./components/student";
import Home from "./components/home";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  

  return (
    <>
    <Router>
    <Nav/>
      <Routes>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/academics" element={<Accademic/>}></Route>
        <Route path="/admission" element={<Admissions/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/faculty" element={<Faculty/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/student" element={<Students/>}></Route>
        <Route path="/home" element={<Home/>}> </Route>
        <Route path="/" element={<Navigate replace to="/home" />}></Route>

      </Routes>
    </Router>
    
      
    </>
  )
}

export default App
