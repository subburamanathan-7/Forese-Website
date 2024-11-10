import React from "react";
import "./index.css";
import Home from "./routes/Home.js"
import About from "./routes/About.js"
import Team from "./routes/Team.js"
import Events from "./routes/Events.js"
import CodersForum from "./routes/CodersForum.js"
import Fored from "./routes/Fored.js"
import Contact from "./routes/Contact.js"
import Submitresume from "./routes/Submitresume.js"
// import MockPlacements from "./routes/MockPlacements";
import MockPlacement from "./routes/MockPlacement.js";
import Mock from "./routes/Mock.js";
import Aptitude from "./routes/Aptitude.js";
import GroupDiscussion from "./routes/GroupDiscussion.js";
// import Seminar from "./routes/Seminar";
import Seminar from "./routes/Seminar.js";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/team" element = {<Team />} />
          <Route path="/events" element = {<Events />} />
          <Route path="/codersforum" element = {<CodersForum />} />
          {/* <Route path="/mockplacements" element={<MockPlacements />}/> */}
          <Route path="/mockplacement" element = {<MockPlacement />} />
          <Route path="/fored" element = {<Fored />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/submitresume" element = {<Submitresume />}/>
          <Route path="/mock" element = {<Mock/>}/>
          <Route path="/aptitude" element = {<Aptitude/>}/>
          <Route path="/groupdiscussion" element = {<GroupDiscussion/>}/>
          {/* <Route path="/seminar" element = {<Seminar/>}/> */}
          <Route path="/seminar" element = {<Seminar/>}/>
          <Route element = {<wwdcard/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
