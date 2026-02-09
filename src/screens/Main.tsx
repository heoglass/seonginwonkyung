import { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
// import IMG_MAIN from "../assets/images/main.png";
import IMG_MAIN2 from "../assets/images/main2.jpg";
import IMG_MAIN_TEXT from "../assets/images/main-text.png";
import IMG_ARROW_DOWN from "../assets/images/arrow-down.png";
import IMG_SHARE from "../assets/icons/share.png";

// const Container = styled.div({
//   // minHeight: "100dvh",
//   // display: "flex",
//   display: "flex",
//   flexDirection: "column",
// });
const MainSection = styled.section({
  display: "flex",
  overflow: "hidden",
});
const InvitationContainer = styled.div({
  width: "100%",
  flex: 1,
  fontFamily: "areyouserious",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // ⭐ 핵심
  alignItems: "center",
  padding: "0 0 env(safe-area-inset-bottom)",
  backgroundColor: "#fff",
});

// const TitleArea = styled.div({
//   fontSize: "70px",
//   textAlign: "center",
//   margin: "30px 0",
//   color: "#F27474",
// });
const TitleImg = styled.img({
  width: "117%",
});
const YellowBackground = styled.div({
  width: "100%",
  backgroundColor: "#F9F6E5",
});
const MainImg = styled.img({
  width: "100%",
  height: "auto",
});

const SubTitle = styled.p({
  fontSize: "37px",
  textAlign: "center",
  // color: "#E71419",
  color: "#4A393A",
  margin: "0 0 10px",
});
const DatePlace = styled.p({
  fontSize: "25px",
  textAlign: "center",
  color: "#E71419",
  // lineHeight: "35px",
});
const InviteArea = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "14px 0 50px",
});
const InviteText = styled(motion.p)({
  textAlign: "center",
  fontFamily: "MBKCorpoS",
  marginBottom: "20px",
});
const ArrowDown = styled(motion.img)({
  width: "16px",
});
const ShareButton = styled.button({
  display: "none",
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  backgroundColor: "#fff",
  color: "#3A1D1D",
  fontSize: "16px",
  fontWeight: 600,
  border: "none",
  // position: "fixed",
  // right: "16px",
  // bottom: "20px",
  // zIndex: 200,
});
const ShareIcon = styled.img({
  width: "20px",
  height: "20px",
});
export default function Main() {
  useEffect(() => {
    if (!window.Kakao) return;

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("8a7c9634adf7a61725f893ab57ee0478");
      // CRA면 process.env.REACT_APP_KAKAO_JS_KEY
    }
  }, []);

  function ShareKakao() {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "함성인 ❤️ 이원경 결혼합니다.",
        description: "2026년 5월 31일 오후 12시 30분",
        imageUrl: "https://seonginwonkyung.vercel.app/share/wedding-img02.jpg",
        link: {
          mobileWebUrl: "https://seonginwonkyung.vercel.app/",
          webUrl: "https://seonginwonkyung.vercel.app/",
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: "https://seonginwonkyung.vercel.app/",
            webUrl: "https://seonginwonkyung.vercel.app/",
          },
        },
      ],
    });
  }
  return (
    <MainSection>
      <InvitationContainer>
        {/* <TitleArea> */}
        <TitleImg src={IMG_MAIN_TEXT} alt="" />
        {/* </TitleArea> */}

        <SubTitle>Wonkyung & Seongin</SubTitle>
        <YellowBackground>
          <MainImg src={IMG_MAIN2} />

          <DatePlace>31 MAY 2026</DatePlace>
          <DatePlace>Onzedroom Myeongdong</DatePlace>
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
              결혼식에 당신을 초대합니다.
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
        </YellowBackground>
        <ShareButton onClick={() => ShareKakao()}>
          <ShareIcon src={IMG_SHARE} />
        </ShareButton>
      </InvitationContainer>
    </MainSection>
  );
}
