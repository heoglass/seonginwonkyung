import styled from "@emotion/styled";
import React from "react";
import Main from "./screens/Main";
import Invitation from "./screens/Invitation";
import ParentLetter from "./screens/ParentLetter";
import OurStory from "./screens/OurStory";
import Gallery from "./screens/Gallery";
import SaveTheDate from "./screens/SaveTheDate";
import Location from "./screens/Location";
import Information from "./screens/Information";

const Container = styled.div({
  height: "100vh",
  overflow: "hidden",
});
const InvitationContainer = styled.div({
  width: "375px",
  height: "100%",
  backgroundColor: "#F9F6E5",
  margin: "0 auto",
  overflowY: "scroll",

  "::-webkit-scrollbar": {
    display: "none",
  },

  "@media (max-width: 768px)": {
    width: "100%",
  },
});
export default function App() {
  return (
    <Container>
      <InvitationContainer>
        <Main />
        <Invitation />
        <SaveTheDate />
        <ParentLetter />
        <OurStory />
        <Gallery />
        <Location />
        <Information />
      </InvitationContainer>
    </Container>
  );
}
