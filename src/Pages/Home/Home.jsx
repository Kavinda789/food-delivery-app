import React, { useState } from "react";
import "./Home.css";
import Herder from "../../Components/Header/Herder";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/AppDownload/AppDownload";

function Home() {

  const [category, setCategory] = useState("All");
  
  return (
    <div>
      <Herder />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  );
}

export default Home;
