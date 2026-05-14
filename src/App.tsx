import styled from "@emotion/styled";
import { motion } from "framer-motion";

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

const Section = styled(motion.section)({
  width: "100%",
});

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const screens = [
  <Invitation />,
  <SaveTheDate />,
  <ParentLetter />,
  <OurStory />,
  <Gallery />,
  <Location />,
  <Information />,
];
export default function App() {
  return (
    <Container>
      <InvitationContainer>
        <Main />

        {screens.map((Screen, index) => (
          <Section
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {Screen}
          </Section>
        ))}
      </InvitationContainer>
    </Container>
  );
}
