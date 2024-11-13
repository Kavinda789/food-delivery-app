import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PleaseOrder from "./Pages/PleaseOrder/PleaseOrder";
import Cart from "./Pages/Cart/Cart";
import StoreContextProvider from "./context/StoreContext";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

const App = () => {

  const[showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <BrowserRouter>
        <StoreContextProvider>
          <div className="app">
            <Navbar setShowLogin={setShowLogin}/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<PleaseOrder />} />
            </Routes>
          </div>
        </StoreContextProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
