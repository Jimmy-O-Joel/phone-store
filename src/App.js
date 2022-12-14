import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {Routes, Route, useLocation} from "react-router-dom"
import Navbar from "./components/Navbar"
import Details from "./components/Details"
import Cart from "./components/Cart/Cart"
import Default from "./components/Default"
import ProductList from "./components/ProductList"
import Modal from './components/Modal';


function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Default location={useLocation()}/>} />
      </Routes>
      <Modal></Modal>
    </React.Fragment>
  );
}

export default App;
