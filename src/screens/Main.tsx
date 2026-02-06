import styled from "@emotion/styled";
import IMG_MAIN from "../assets/images/main.png";
import IMG_MAIN_TEXT from "../assets/images/main-text.png";
import IMG_ARROW_DOWN from "../assets/images/arrow-down.png";
import { motion } from "framer-motion";

// const Container = styled.div({
//   // minHeight: "100dvh",
//   // display: "flex",
//   display: "flex",
//   flexDirection: "column",
// });
const MainSection = styled.section({
  minHeight: "100svh", // 모바일 주소창 제외한 안전 영역
  maxHeight: "100dvh", // 최신 브라우저 대응
  display: "flex",
});
const InvitationContainer = styled.div({
  width: "100%",
  flex: 1,
  fontFamily: "areyouserious",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // ⭐ 핵심
  alignItems: "center",
  padding: "24px 0 env(safe-area-inset-bottom)",
  backgroundColor: "#fff",
});

const TitleArea = styled.div({
  // fontSize: "70px",
  // textAlign: "center",
  // margin: "30px 0",
  // color: "#F27474",
});
const TitleImg = styled.img({
  width: "100%",
});

const MainImg = styled.img({
  width: "100%",
  height: "auto",
});

const SubTitle = styled.p({
  fontSize: "37px",
  textAlign: "center",
  color: "#E71419",
  margin: "25px 0",
});
const DatePlace = styled.p({
  fontSize: "25px",
  textAlign: "center",
  color: "#E71419",
  lineHeight: "35px",
});
const InviteArea = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px 0 50px",
});
const InviteText = styled(motion.p)({
  textAlign: "center",
  fontFamily: "MBKCorpoS",
  marginBottom: "20px",
});
const ArrowDown = styled(motion.img)({
  width: "16px",
});
export default function Main() {
  return (
    <MainSection>
      <InvitationContainer>
        <TitleArea>
          <TitleImg src={IMG_MAIN_TEXT} alt="" />
        </TitleArea>

        <MainImg src={IMG_MAIN} />

        <SubTitle>Wonkyung And Seongin</SubTitle>
        <DatePlace>
          31 MAY 2026
          <br />
          oncedrom meongdong
        </DatePlace>
        <InviteArea>
          <InviteText
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
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
    </MainSection>
  );
}
