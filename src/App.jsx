import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden font-poppins">
      <Header />
      <About />
      <Product />
      <Footer />
    </div>
  );
};

export default App;
