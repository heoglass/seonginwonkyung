import React from "react";
import Main from "./screens/Main";
import Invitation from "./screens/Invitation";
import ParentLetter from "./screens/ParentLetter";
import OurStory from "./screens/OurStory";

export default function App() {
  return (
    <div>
      <Main />
      {/* <Invitation /> */}
      <ParentLetter />
      <OurStory />
    </div>
  );
}
