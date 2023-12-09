import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ChartContainer from "./components/chart";
import List from "./components/list";
import CardSlider from "./components/cardslider";
import { stocks, options } from "./data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ChartContainer />
      <div className="flex w-full">
        <div className="w-3/5 ">
          <div className="flex justify-around">
            <List type={"Stocks"} data={stocks} />
            <List type="Options" data={options} />
          </div>
        </div>
        <div className="w-2/5 flex justify-center ">
          <CardSlider />
        </div>
      </div>
    </div>
  );
}

export default App;
