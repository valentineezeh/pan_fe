import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import TopSegment from "./components/TopSegment/TopSegment";
import "./App.css";
import ProductSegment from "./components/ProductSegment/ProductSegement";

function App() {
  return (
    <>
      <NavigationBar />
      <TopSegment />
      <ProductSegment />
    </>
  );
}

export default App;
