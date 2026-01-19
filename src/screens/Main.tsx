import styled from "@emotion/styled";
import IMG_TEST from "../assets/images/test1.png";
import IMG_ARROW_DOWN from "../assets/images/arrow-down.png";
import { motion } from "framer-motion";

const Container = styled.div({
  height: "100vh",
  // overflow: "hidden",
});

const InvitationContainer = styled.div({
  width: "100%",
  height: "100%",
  fontFamily: "areyouserious",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F9F6E5",
});

const Title = styled.p({
  fontSize: "70px",
  textAlign: "center",
  margin: "30px 0",
  color: "#F27474",
});

const MainImg = styled.img({
  width: "100%",
  height: "auto",
});

const SubTitle = styled.p({
  fontSize: "40px",
  textAlign: "center",
  color: "#F27474",
  margin: "25px 0",
});
const DatePlace = styled.p({
  fontSize: "25px",
  textAlign: "center",
  color: "#F27474",
  lineHeight: "35px",
});
const InviteArea = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px 0",
});
const InviteText = styled.p({
  textAlign: "center",
  fontFamily: "MBKCorpoS",
  marginBottom: "20px",
});
const ArrowDown = styled(motion.img)({
  width: "16px",
});
export default function Main() {
  return (
    <Container>
      <InvitationContainer>
        <Title>Save the Date!</Title>

        <MainImg src={IMG_TEST} />

        <SubTitle>Seongin And Wonkyung</SubTitle>
        <DatePlace>
          31 MAY 2026
          <br />
          oncedrom meongdong
        </DatePlace>
        <InviteArea>
          <InviteText>
            성인이와 원경이의
            <br />
            특별한 결혼식에 당신을 초대합니다.
          </InviteText>
          <ArrowDown
            src={IMG_ARROW_DOWN}
            alt="scroll down"
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </InviteArea>
      </InvitationContainer>
    </Container>
  );
}
