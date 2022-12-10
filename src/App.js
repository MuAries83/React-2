import React from "react";
import './App.css';
import Header from "./components/navbar/Header";
import Home from "./components/pages/Home";
import Checkout from "./components/pages/Checkout"
import Novedades from "./components/pages/Novedades"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="app">
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/novedades" element={<Novedades/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
