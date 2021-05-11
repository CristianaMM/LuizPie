import React from "react";
import SideBar from "./components/SideBar";
import Album from "./sections/Album";
import Biografia from "./sections/Biografia";
import Contato from "./sections/Contato";
import MobileFooter from "./components/MobileFooter";
import PaginationDots from "./components/PaginationDots";
import Quote from "./sections/Quote";

export default function App() {
  return (
    <div>
      <SideBar />
      <PaginationDots />
      <div className="main-content">
        <Quote
          mainQuote="Quando aparece alguém assim com bom gosto e oferece sua alma e coração
          pra gente, o mundo se torna mais feliz e acreditável."
          author="Nilton Nascimento"
          arrowRef="#album"
          sectionID="firstQuote"
        />
        <Album />
        <Quote
          mainQuote="Se eu tivesse a sua voz, eu conquistaria o mundo!"
          author="Roberto Menescal"
          sectionID="secondQuote"
        />
        <Biografia />
        <Contato />
      </div>
      <MobileFooter />
    </div>
  );
}
