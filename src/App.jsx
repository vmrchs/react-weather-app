import { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
