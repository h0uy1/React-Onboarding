import React from "react";
import "../styles/Home.css";
import Header from "../Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "../Components/Details";
import Grid from "../Components/Grid";
import Desciption from "../Components/Desciption";
import Nav from "../Components/Nav";

function Home() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Nav/>
              <Header className="py20 w-full text-center text-blue-900 font-bold text-4xl pt-10"/>
              <Desciption className="text-xs xl:text-base px-10 md:px-40 lg:px-46 xl:px-52 text-center pt-5"/>
              <Grid/>
            </>
          }>
          </Route>
          <Route path="/Details/:id" element={<Details/>}></Route>
        </Routes>
    </Router>
    
  );
}

export default Home;
