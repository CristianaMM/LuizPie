import React from "react";
import SideBar from "./components/SideBar";
import FirstQuote from "./components/FirstQuote";
import Album from "./components/Album";
import SecondQuote from "./components/SecondQuote";
import Biografia from "./components/Biografia";
import Contato from "./components/Contato";
import MobileFooter from "./components/MobileFooter";

export default function App() {
  return (
    <div>
      <SideBar />
      <div className="main-content">
        <FirstQuote />
        <Album />
        <SecondQuote />
        <Biografia />
        <Contato />
      </div>
      <MobileFooter />
    </div>
  );
}
