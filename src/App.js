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
        <Route path="/Forese-Website">
          <Route path="/Forese-Website/home" element = {<Home />} />
          <Route path="/Forese-Website/about" element = {<About />} />
          <Route path="/Forese-Website/team" element = {<Team />} />
          <Route path="/Forese-Website/events" element = {<Events />} />
          <Route path="/Forese-Website/codersforum" element = {<CodersForum />} />
          {/* <Route path="/mockplacements" element={<MockPlacements />}/> */}
          <Route path="/Forese-Website/mockplacement" element = {<MockPlacement />} />
          <Route path="/Forese-Website/fored" element = {<Fored />} />
          <Route path="/Forese-Website/contact" element = {<Contact />} />
          <Route path="/Forese-Website/submitresume" element = {<Submitresume />}/>
          <Route path="/Forese-Website/mock" element = {<Mock/>}/>
          <Route path="/Forese-Website/aptitude" element = {<Aptitude/>}/>
          <Route path="/Forese-Website/groupdiscussion" element = {<GroupDiscussion/>}/>
          {/* <Route path="/seminar" element = {<Seminar/>}/> */}
          <Route path="/Forese-Website/seminar" element = {<Seminar/>}/>
          <Route element = {<wwdcard/>}/>
        </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
