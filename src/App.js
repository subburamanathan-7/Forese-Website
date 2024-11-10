import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Team from "./routes/Team"
import Events from "./routes/Events"
import CodersForum from "./routes/CodersForum"
import Fored from "./routes/Fored"
import Contact from "./routes/Contact"
import Submitresume from "./routes/Submitresume"
// import MockPlacements from "./routes/MockPlacements";
import MockPlacement from "./routes/MockPlacement";
import Mock from "./routes/Mock";
import Aptitude from "./routes/Aptitude";
import GroupDiscussion from "./routes/GroupDiscussion";
// import Seminar from "./routes/Seminar";
import Seminar from "./routes/Seminar";

import wwdcard from "./routes/wwdcard";



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
