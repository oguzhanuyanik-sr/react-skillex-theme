import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Tab from "./components/Tab/Tab";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Comment from "./components/Comment/Comment";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Tab />
      <Skills />
      <Comment />
      <Footer />
    </>
  );
}

export default App;
