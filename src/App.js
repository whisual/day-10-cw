import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Restlist from "./components/Restlist";
import restaurants from "./assets/Rest";

const App = () => {
  // Your restaurants data

  return (
    <div>
      <Navbar />
      <Restlist restaurants={restaurants} />
    </div>
  );
};

export default App;