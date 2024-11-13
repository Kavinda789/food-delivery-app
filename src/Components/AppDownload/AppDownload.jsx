import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

function AppDownload() {
  return (
    <div className="app-dounload" id="app-download">
      <p>
        For Better Experience Doumload <br /> Tomato App
      </p>
      <div className="app-dounload-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDownload;
