import "./main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./sections/Home/Home";
import { Invitation } from "./sections/Invitation/Invitation";
import { History } from "./sections/History/History";
import { Ceremony } from "./sections/Ceremony/Ceremony";
import { Event } from "./sections/Event/Event";
import { Gallery } from "./sections/Gallery/Gallery";
import { Identify } from "./sections/Identify/Identify";
import { Gifts } from "./sections/Gifts/Gifts";
import { Footer } from "./sections/Footer/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main>
      <Home />
      <Invitation />
      <History />
      <Ceremony />
      <Event />
      <Gallery />
      <Identify />
      <Gifts />
      <Footer />
    </main>
  </StrictMode>
);
