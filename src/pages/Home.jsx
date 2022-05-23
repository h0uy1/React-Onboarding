import React from "react";
import "../styles/Home.css";
import Header from "../Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Details";
import Grid from "../Components/Grid";

function Home() {
  return (
    <Router>
      <div>
        <Header className="py20 w-full text-center text-cyan-900 font-bold text-4xl pt-10"/>
        <Grid/>
      </div>
    </Router>
  );
}

export default Home;
